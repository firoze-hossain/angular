export class DataSevice {
  getDetails() {
    const resultPromis = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
    return resultPromis;
  }
}
