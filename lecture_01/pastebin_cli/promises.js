const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);

    setTimeout(() => {
        reject('Error!');
    }, 2000);
});

async function main() {
    try {
        console.log('Before promise');
        const data = await promise;
        console.log('After promise');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

console.log('Before main');
main();
console.log('After main');