require 'rails_helper'

describe Task do

  it { should have_many(:comments).dependent(:destroy)  }
  it { should validate_presence_of(:name)  }
  it { should validate_presence_of(:start_date)  }
  it { should validate_presence_of(:end_date)  }
  it { should validate_presence_of(:cost)  }
  it { should validate_presence_of(:status)  }
end
