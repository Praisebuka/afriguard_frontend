export default () => ({
    baseUrl: process.env.NODE_ENV === "local" ? "http://localhost:8000/api/v1" : process.env.REACT_APP_BASE_URL,
    recaptcha: {
        site_key: "6Lfn-KonAAAAANCme6VH-IN-ey-uJxgctdQ_5rq1",
        //The site key below is for ashopree only but somehow the one above is from pos.exbc and it's working.
        // site_key: "6LfL6-opAAAAAEWHiWnTGqthfzHmoNw60j2yRj9G",
        secret_key: "6LfL6-opAAAAAE9Z6Q6n1J75qlNuZQI5ZGjoHonX"
    },
});