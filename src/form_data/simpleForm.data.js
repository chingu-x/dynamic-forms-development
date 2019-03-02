const SimpleFormQA = [
  {
    text: "Age",
    input_type: "dropdown",
    field_name: "age",
    placeholder: "Choose Age Range",
    options: [
      { text: "18-24" },
      { text: "25-54" },
      { text: "55-61" },
      { text: "62-Older" }
    ]
  },
  {
    text: "Ethnicity",
    input_type: "dropdown",
    field_name: "ethnicity",
    placeholder: "Choose Ethnicity",
    options: [
      { text: "Hispanic/Latino" },
      { text: "Not Hispanic/Latino" },
      { text: "Unknown" }
    ]
  },
  {
    text: "Race",
    input_type: "dropdown",
    field_name: "race",
    placeholder: "Choose Race",
    options: [
      { text: "White" },
      { text: "Black/African-American" },
      { text: "Asian" },
      { text: "American Indian/Alaskan Native" },
      { text: "Native Hawaiian/Other Pacific Islander" },
      { text: "Multi-Racial/Other" },
      { text: "Other" }
    ]
  },
  {
    text: "Gender",
    input_type: "dropdown",
    field_name: "gender",
    placeholder: "Choose Gender",
    options: [
      { text: "Female" },
      { text: "Male" },
      { text: "Transgender Male to Female" },
      { text: "Transgender Female to Male" },
      { text: "Other" },
      { text: "Unknown" }
    ]
  },
  {
    text: "Income Source",
    input_type: "dropdown",
    field_name: "income_source",
    placeholder: "Choose Source",
    options: [
      { text: "TANF" },
      { text: "GR" },
      { text: "SSI/SSDI" },
      { text: "Job" },
      { text: "Other" }
    ]
  },
  {
    text: "Income per Month",
    input_type: "dropdown",
    field_name: "income_per_month",
    placeholder: "Choose Income",
    options: [
      { text: "$0" },
      { text: "$100-250" },
      { text: "$251-500" },
      { text: "$501-1000" },
      { text: "$1000-1500" },
      { text: "$1500 and up" }
    ]
  }
];

export default SimpleFormQA;
