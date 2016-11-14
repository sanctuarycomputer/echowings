class Echowings::Analyzer
  def initialize
    Sentimentalizer.setup
  end

  def process(phrase)
    Sentimentalizer.analyze phrase
  end
end
