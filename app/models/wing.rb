class Wing < ApplicationRecord
  validates :email, email: true, uniqueness: true
  validates_presence_of :polarity

  enum polarity: {
    left: 0,
    right: 1,
    middle: 2
  }
end
