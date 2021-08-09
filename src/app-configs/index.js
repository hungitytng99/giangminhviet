// config for dev;
export const Configs = {
    BASE_API: "https://gmvbackend.herokuapp.com/api",

    CURRENT_PAGE: 1,
    FILE_MAXIMUM: 2, //MB
    PAGE_SIZE_20: 20,
    DEFAULT_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiU3lzQWRtaW4iLCJpZHAiOiJTRUxGIiwidWlkIjoiMzMzZTBjNzAtMDZlNy00MmE5LTg4NjgtY2Y3NzRlMzgwMTQwIiwibmJmIjoxNjI4MTY4MDY5LCJleHAiOjE2MzY4MDgwNjksImlhdCI6MTYyODE2ODA2OSwiaXNzIjoiYXBpLjNsb2Nrcy5ub2Jpc29mdC5jb20udm4iLCJhdWQiOiIzbG9ja3Mubm9iaXNvZnQuY29tLnZuIn0.EPuJrULohbWXs2zANMnHq1_KTMVQgie7e23f-nOgsgs"
};

export const REQUEST_STATE = {
    ERROR: "ERROR",
    REQUEST: "REQUEST",
    SUCCESS: "SUCCESS",
};

export const ACTION_TYPE = {
    CREATE: "CREATE",
    LIST: "LIST",
    VIEW: "VIEW",
    DELETE: "DELETE",
    UPDATE: "UPDATE",
    UNMOUNT: "UNMOUNT"
};