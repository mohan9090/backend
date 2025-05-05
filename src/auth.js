export async function getHello() {
    // Simulate an API call or return a hardcoded response
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: { message: "Hello from auth module!" } });
        }, 500);
    });
}
