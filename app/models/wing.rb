class Wing < ApplicationRecord
  validates :email, email: true, uniqueness: true
  validates_presence_of :polarity

  enum polarity: {
    left: 0,
    right: 1,
    middle: 2
  }

  def display_results
    case polarity
    when :neutral
      "Republicans and Democrats"
    when :negative
      "Republicans"
    when :positive
      "Democrats"
    end
  end
end
