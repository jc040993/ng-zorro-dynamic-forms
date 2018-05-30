export const FormModel = {
    title: "Personal Info",
    form: [{
        order: 1,
        key: "firstName",
        label: "First name",
        type: "inputWithAutoComplete",
        defaultValue: null,
        placeholder: "first name...",
        options: ["Hitesh", "Harish", "JC"]
    },
    {
        order: 2,
        key: "lastName",
        label: "Last name",
        type: "input",
        defaultValue: null,
        placeholder: "last name..."
    },
    {
        order: 3,
        key: "email",
        label: "Email id",
        type: "input",
        defaultValue: null,
        placeholder: "email id..."
    },
    {
        order: 4,
        key: "dob",
        label: "DOB",
        type: "date",
        defaultValue: null,
        format: "yyyy/MM/dd"
    },
    {
        order: 5,
        key: "age",
        label: "Age",
        type: "number",
        defaultValue: null,
        placeholder: "age...",
        min: 18,
        max: 25,
        step: 1
    },
    {
        order: 6,
        key: "gender",
        label: "Gender",
        type: "radio",
        defaultValue: null,
        options: [{
            label: "Male",
            value: "m"
        },
        {
            label: "Female",
            value: "f"
        },
        {
            label: "Others",
            value: "o"
        }]
    },
    {
        order: 8,
        key: "address",
        label: "Address",
        type: "object",
        sub: [{
            order: 1,
            key: "street",
            label: "street",
            type: "input",
            defaultValue: null,
            placeholder: ""
        },
        {
            order: 2,
            key: "landmark",
            label: "Landmark",
            type: "input",
            defaultValue: null,
            placeholder: ""
        },
        {
            order: 3,
            key: "city",
            label: "City",
            type: "input",
            defaultValue: null,
            placeholder: ""
        },
        {
            order: 4,
            key: "state",
            label: "State",
            type: "input",
            defaultValue: null,
            placeholder: ""
        },
        {
            order: 5,
            key: "country",
            label: "Country",
            type: "dropdown",
            defaultValue: null,
            allowClear: false,
            showSearch: false,
            mode: "default",
            options: [{
                label: "India",
                value: "india"
            },
            {
                label: "US",
                value: "us"
            },
            {
                label: "Dubai",
                value: "dub"
            },
            {
                label: "Austrila",
                value: "aus"
            },
            {
                label: "Other",
                value: "other",
                disabled: true,
                content: "Any other country not listed here"
            }]
        }]
    },
    {
        order: 9,
        key: "about",
        label: "About",
        type: "textareaWithAutoComplete",
        defaultValue: null,
        placeholder: "Tell us about you...",
        size: { minRows: 2, maxRows: 6 },
        options: [
            "I am cool dude",
            "I'm rockstar"
        ]
    },
    {
        order: 10,
        key: "skills",
        label: "Skills",
        type: "checkbox",
        options: [{
            label: "Java",
            value: "java",
            key: "java",
            defaultValue: true
        },
        {
            label: "Javascript",
            value: "javascript",
            key: "javascript",
            defaultValue: true
        },
        {
            label: "Testing",
            value: "testing",
            key: "testing",
            defaultValue: false
        },
        {
            label: "Data Mapping",
            value: "datamapping",
            key: "datamapping",
            defaultValue: false
        },
        {
            label: "Others",
            value: "others",
            key: "others",
            defaultValue: false
        }]
    },
    {
        order: 11,
        key: "experience",
        label: "Experience",
        type: "array",
        default: [
            {
                key: "language",
                type: "input",
                placeholder: "laguage"
            },
            {
                key: "year",
                type: "number",
                placeholder: "years"
            }
        ],
        array: [
            [
                {
                    key: "language",
                    type: "input",
                    defaultValue: "Java",
                    placeholder: "laguage"
                },
                {
                    key: "year",
                    type: "number",
                    defaultValue: "1",
                    placeholder: "years"
                }
            ],
            [
                {
                    key: "language",
                    type: "input",
                    defaultValue: "Javascript",
                    placeholder: "laguage"
                },
                {
                    key: "year",
                    type: "number",
                    defaultValue: "2",
                    placeholder: "laguage"
                }
            ]
        ]
    }]
}
