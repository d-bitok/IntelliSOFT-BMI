## IntelliSOFT BMI Frontend
Using:
  - React Native
  - Expo
  - iOS device

## Screens (Registration to Report)
On Registration Page Form Details :
  - DOB
  - First Name
  - Last Name
  - Buttons
![registration-page](https://user-images.githubusercontent.com/17353534/134855537-c76ab5b2-e8d9-4d63-a410-f3fb25c69e6b.jpg)

# Login Report Page Shows Info Entered During Registration :
  - First Name
  - Last Name
  - DOB
  - A Button to go Back
  - A Button to Check BMI
![login-report](https://user-images.githubusercontent.com/17353534/134855548-3701eb18-2def-4d3e-84ee-0f3f86fcadb4.jpg)

# BMI Vitals Page Contains :
  - Date
  - Height in centimeters
  - Weight in kilograms
  - BMI auto calculation
    # Calculating BMI Using the Metric System
        Formula: weight (kg) / [height (m)]2
        Calculation: [weight (kg) / height (cm) / height (cm)] x 10,000

![bmi-vitals](https://user-images.githubusercontent.com/17353534/134855579-32569d3a-caed-48b3-8c7c-047f9f5077df.jpg)
  
  - Save button on the BMI Vitals Form will :
   # Show Form A
      if (BMI < 25) {
        return Form-A
      }

![form-A](https://user-images.githubusercontent.com/17353534/134855761-4cf8457b-57be-4c4a-83b7-0eb20173e1f8.jpg)
   
   # Show Form B
      if (BMI >= 25) {
        return Form-B
      }
      
![form-B](https://user-images.githubusercontent.com/17353534/134855744-b2c89243-8d84-4c51-9cb1-98d261a24ae6.jpg)

# Patient Report Modal Popup On Save Form A/B
Details including :
  - Date entered on either form A or form B
  - A table with :
    - Full Names, Age and BMI Status header row
    - Auto-populated Full Names
   # Calculated Age ;
      DOB subtracted from the Date entered
      
   # Determined BMI Status ;
      if (x > -1 && x < 19) { // Should be 18.5. Working on the rounding off factor
            return 'Underweight'
        } else if (x > 18 && x < 26) {
            return 'Normal'
        } else if (x > 24) {
            return 'Overweight'
        }
        return 'Invalid Value'
![Patient-report](https://user-images.githubusercontent.com/17353534/134855791-9d804135-e2ee-4fdc-8eb7-bcf7e5213a98.jpg)

# Extra Details From The Registration Page
All to be routed to the backend API and stored in the MongoDB database
  - Link to the IntelliSOFT-BMI backend git repository.
    https://github.com/rexdougie/intelliSOFT.git
  - Link to the Database will be shared privately.
