import mongoose, { Mongoose } from "mongoose";

export interface IDB {
  /**
   * db 连接
   */
  connect(): Promise<any>;
}

export interface IDBConstructorParams {
  connectionString: string;
}

export class DB implements IDB {
  /**
   * 连接字符串
   */
  private readonly connectionString: string;

  public constructor({ connectionString }: IDBConstructorParams) {
    this.connectionString = connectionString;
  }

  /**
   * db 连接
   */
  public async connect(): Promise<Mongoose> {
    return mongoose.connect(this.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}
