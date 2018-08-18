import fs from "fs";

export const bufferToBoolean = (input) => {
    // eslint-disable-next-line
    if (Buffer.isBuffer(input)) {
        const values = input.values();

        for (const value of values) {
            return value === 1;
        }
    }

    return false;
};

export const isBuffer = (input) => {
    // eslint-disable-next-line
    return Buffer.isBuffer(input);
};

export const handleSingleQuote = (input) => {
    return input.replace(/'/g, "\\\'\\\'");
};

export const hasStringValue = (input) => {
    return input !== null && input !== undefined && input !== "";
};

export const hasValue = (input) => {
    return input !== null && input !== undefined;
};

export const bookshelfError = (err) => {
    return `${err.code}: ${err.sqlMessage}`;
};

export const mergeFieldString = (fieldName, input, value) => {
    return input.replace(fieldName, value);
}

export const mergeFieldNumber = (fieldName, input, value) => {
    return input.replace(fieldName, value);
}

export const mergeFieldDateTime = (fieldName, input, value) => {    
    return input.replace(fieldName, value);
}

export const readFileToString = (path) => {
    return fs.readFileSync(path, "utf8").toString();
}

export const mergeDataField = (template, data) => {
    for (const field in data) {
        switch (field.type) {
            case "number":
                mergeFieldNumber(`[${field.key}]`, template, field.value);
                break;
            case "date":
                mergeFieldDateTime(`[${field.key}]`, template, field.value);
                break;
            case "string":
                mergeFieldString(`[${field.key}]`, template, field.value);
                break;
        }
    }

    return template;
}