// 7) Generic Storage Class
class Storage<T> {
    private data: T;
  
    constructor(value: T) {
      this.data = value;
    }
  
    get(): T {
      return this.data;
    }
  
    set(value: T): void {
      this.data = value;
    }
  }
  const numberStore = new Storage<number>(100);
  console.log("7) Number storage:", numberStore.get());
  
  const stringStore = new Storage<string>("Hello");
  console.log("   String storage:", stringStore.get());
  
  