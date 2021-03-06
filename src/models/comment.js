module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
        },
      },
      commenter: {
        type: DataTypes.STRING(32),
        allowNull: false,
        validate: {
          is: { args: /^[A-z0-9_.]+$/, msg: 'invalid username' },
          len: { args: [5, 32], msg: 'username length must around 5-32' },
        },
      },
      content: {
        type: DataTypes.STRING(1024) + ' CHARSET utf8 COLLATE utf8_unicode_ci',
        allowNull: false,
      },
      like: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        validate: {
          isInt: true,
        },
      },
      replyOf: { type: DataTypes.INTEGER, validate: { isInt: true } },
    },
    {},
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, {
      foreignKey: 'commenter',
      sourceKey: 'username',
      targetKey: 'username',
    });

    Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      sourceKey: 'id',
      targetKey: 'id',
    });

    Comment.belongsTo(Comment, {
      foreignKey: 'replyOf',
      sourceKey: 'id',
      targetKey: 'id',
    });

    Comment.hasMany(Comment, {
      foreignKey: 'replyOf',
      sourceKey: 'id',
      as: 'replies',
    });

    Comment.hasMany(models.CommentLike, {
      foreignKey: 'commentId',
      sourceKey: 'id',
    });
  };
  return Comment;
};
