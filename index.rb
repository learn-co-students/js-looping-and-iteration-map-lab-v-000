def lower_case_drivers(drivers)
  drivers.map do |driver|
    driver.downcase
  end
end

def name_to_attributes(drivers)
  drivers.map do |driver|
    name_splitter(driver)
  end
end

def name_splitter(name)
  full_name = name.split(" ");
  {first_name: full_name[0], last_name: full_name[1]}
end

def attributes_to_phrase(drivers)
  drivers.map do |driver|
    "#{driver[:name]} is from #{driver[:hometown]}"
  end
end
