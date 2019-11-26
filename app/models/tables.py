from app import db


class User (db.Model):
    __tablename__ = "users"
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    username = db.Column(db.String, unique=True)
    password = db.Column(db.String)

    def __unit__(self, name, email, username, password):
        self.name = name
        self.email = email
        self.username = username
        self.password = password

    
    def __repr__(seft):
        return "<User %r>" % self.username



class Post (db.Model):
    __tablename__ = "posts"

    id  = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship('User', foreign_keys=user.id)

    def __unit__(seft, content, user_id):
        self.content = content
        self.user_id = user_id

    
    def __repr__(self):
        return "<Post %r>" % self.id



class Follow (db.Model):
    __tablename__ = "follow"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    follow_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __unit__(self, user_id, follow_id)
        self.user_id = user_id
        self.follow_id = follow_id

        user = db.relationship('User', foreign_keys=user.id)
        follow = db.relationship('User', foreign_keys=follow.id)

    def __repr__(self)
        return "<Follow %r>" % self.id_follow