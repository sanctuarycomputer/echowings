class Wing < ApplicationRecord
  enum polarity: {
    left: 0,
    right: 1
  }
end
