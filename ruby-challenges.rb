# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# PSEUDOCODE:
# INPUT: Array of words (the words are String data types), and a single letter (also a String data type)
# OUTPUT: New array containing only words that include the test variable in the spelling
# PROCESS: The word list is in an array, therefore is an enumerable, meaning I can iterate through it depending on the Ruby built-in method used. 
# I'll utilize a block for anonymous function capability. It is established by the words do/end and can take a parameter in between the pipe characters ||.
# The method 'letter_finder' will use two parameters. 

def letter_finder(array, letter)
# defining the method and establishing that I'll be calling on the array and test variables as parameters 
  array.select do |word|
  # block creation established with keywords do/end
  # the .select built-in method works by iterati
  # taking in the parameter 'word' to perform an action on
    word.include?(letter)
    # searching within each word with the built-in method .include? for the parameter given in the letter_finder method
  end
end
p letter_finder(beverages_array, letter_o)
# output: ["coffee", "soda water"]
p letter_finder(beverages_array, letter_t)
# output: ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# PSEUDOCODE:
# INPUT: Hash
# OUTPUT: Array of states alphabetized
# PROCESS: A quick Google search offers the built-in method .flatten which takes nested arrays and reduces them to one.
# The method I'll create called 'magical_method' will utilize iteration, retrieval, sorting, and combining (.flatten). 

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 
 
def magical_method(hash)
# defining the method 'magical_method' that takes in a parameter
  regions = hash.values
  # created a variable that retrieves the hash values by using the .values built-in method
  regions.flatten.sort
  # used built-in methods on the regions variable to combine the arrays and sort them alphabetically
end
p magical_method(us_states)
# output: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# PSEUDOCODE:
# PROCESS: Utilize attr_accessor helper method to provide getter & setter methods
# initialize with three instance variables, setting default values for current speed and number of wheels

class Bike
  attr_accessor :model

  def initialize(model)
    @model = model
    @current_speed = 0    # setting a default value
    @wheels = 2           # setting a default value
  end
  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
                          # getting the values that were set with the instance variables
  end
end
my_bike = Bike.new('Trek')
p my_bike.bike_info
# output: "The Trek bike has 2 wheels and is going 0 mph."

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# PSEUDOCODE:
# INPUT: Integer
# OUPUT: Integer for both methods, but no negative Integer for the brake method.
# PROCESS: Define the my_bike and brake methods. Utilize += (Addition and Assignment Operators) and -= (Subtraction and Assignment Operators) to calculate acceleration and deceleration in their respective methods. The brake method needs to subtract speeds not to exceed 0 (no negative Integer). Use a conditional statement in the brake method to output the expected values.

class Bike
  attr_accessor :model

  def initialize(model)
    @model = model
    @current_speed = 0
    @wheels = 2
  end
  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
  def pedal_faster faster_num
    @current_speed += faster_num  # meaning: @current_speed = @current_speed + faster_num
  end
  def brake slowdown_num
    decelerate = @current_speed -= slowdown_num   #assigning the variable 'decelerate' to the @current_speed = @current_speed - slowdown_num equation
    if decelerate > 0             # if the value produced in the 'decelerate' variable equation is greater than 0 mph
      decelerate                  # then return the value produced 
    elsif decelerate <= 0         # if, however, the 'decelerate' value is less than or equal to zero
      @current_speed = 0          # then make the speed equal zero
    end
  end
end
my_bike = Bike.new('Trek')
p my_bike.pedal_faster(10)
# output: 10
p my_bike.pedal_faster(18)
# output: 28
p my_bike.brake(5)
# output: 23
p my_bike.brake(25)
# output: 0
