class Wing < ApplicationRecord
  validates :email, email: true, uniqueness: true
  validates_presence_of :polarity

  enum polarity: {
    left: 0,
    right: 1,
    middle: 2
  }

  def display_results
    case polarity.to_sym
    when :middle
      "Republicans and Democrats"
    when :left
      "Republicans"
    when :right
      "Democrats"
    end
  end
end
