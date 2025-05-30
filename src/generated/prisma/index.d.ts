
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model BranchEmployee
 * 
 */
export type BranchEmployee = $Result.DefaultSelection<Prisma.$BranchEmployeePayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Flock
 * 
 */
export type Flock = $Result.DefaultSelection<Prisma.$FlockPayload>
/**
 * Model FeedNameCategory
 * 
 */
export type FeedNameCategory = $Result.DefaultSelection<Prisma.$FeedNameCategoryPayload>
/**
 * Model Feed
 * 
 */
export type Feed = $Result.DefaultSelection<Prisma.$FeedPayload>
/**
 * Model MedicineNameCategory
 * 
 */
export type MedicineNameCategory = $Result.DefaultSelection<Prisma.$MedicineNameCategoryPayload>
/**
 * Model MedicineNameAdd
 * 
 */
export type MedicineNameAdd = $Result.DefaultSelection<Prisma.$MedicineNameAddPayload>
/**
 * Model MedicinePurchess
 * 
 */
export type MedicinePurchess = $Result.DefaultSelection<Prisma.$MedicinePurchessPayload>
/**
 * Model MedicineStock
 * 
 */
export type MedicineStock = $Result.DefaultSelection<Prisma.$MedicineStockPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FlockStatus: {
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  CLOSED: 'CLOSED'
};

export type FlockStatus = (typeof FlockStatus)[keyof typeof FlockStatus]


export const Custtype: {
  Broiler: 'Broiler',
  Color: 'Color'
};

export type Custtype = (typeof Custtype)[keyof typeof Custtype]


export const BranchType: {
  HeadOffice: 'HeadOffice',
  BranchOffice: 'BranchOffice',
  BoguraOffice: 'BoguraOffice'
};

export type BranchType = (typeof BranchType)[keyof typeof BranchType]

}

export type FlockStatus = $Enums.FlockStatus

export const FlockStatus: typeof $Enums.FlockStatus

export type Custtype = $Enums.Custtype

export const Custtype: typeof $Enums.Custtype

export type BranchType = $Enums.BranchType

export const BranchType: typeof $Enums.BranchType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Branches
 * const branches = await prisma.branch.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Branches
   * const branches = await prisma.branch.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branchEmployee`: Exposes CRUD operations for the **BranchEmployee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BranchEmployees
    * const branchEmployees = await prisma.branchEmployee.findMany()
    * ```
    */
  get branchEmployee(): Prisma.BranchEmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flock`: Exposes CRUD operations for the **Flock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flocks
    * const flocks = await prisma.flock.findMany()
    * ```
    */
  get flock(): Prisma.FlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedNameCategory`: Exposes CRUD operations for the **FeedNameCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedNameCategories
    * const feedNameCategories = await prisma.feedNameCategory.findMany()
    * ```
    */
  get feedNameCategory(): Prisma.FeedNameCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feed`: Exposes CRUD operations for the **Feed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feeds
    * const feeds = await prisma.feed.findMany()
    * ```
    */
  get feed(): Prisma.FeedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicineNameCategory`: Exposes CRUD operations for the **MedicineNameCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicineNameCategories
    * const medicineNameCategories = await prisma.medicineNameCategory.findMany()
    * ```
    */
  get medicineNameCategory(): Prisma.MedicineNameCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicineNameAdd`: Exposes CRUD operations for the **MedicineNameAdd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicineNameAdds
    * const medicineNameAdds = await prisma.medicineNameAdd.findMany()
    * ```
    */
  get medicineNameAdd(): Prisma.MedicineNameAddDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicinePurchess`: Exposes CRUD operations for the **MedicinePurchess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicinePurchesses
    * const medicinePurchesses = await prisma.medicinePurchess.findMany()
    * ```
    */
  get medicinePurchess(): Prisma.MedicinePurchessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicineStock`: Exposes CRUD operations for the **MedicineStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicineStocks
    * const medicineStocks = await prisma.medicineStock.findMany()
    * ```
    */
  get medicineStock(): Prisma.MedicineStockDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Branch: 'Branch',
    Customer: 'Customer',
    Address: 'Address',
    BranchEmployee: 'BranchEmployee',
    Employee: 'Employee',
    Flock: 'Flock',
    FeedNameCategory: 'FeedNameCategory',
    Feed: 'Feed',
    MedicineNameCategory: 'MedicineNameCategory',
    MedicineNameAdd: 'MedicineNameAdd',
    MedicinePurchess: 'MedicinePurchess',
    MedicineStock: 'MedicineStock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "branch" | "customer" | "address" | "branchEmployee" | "employee" | "flock" | "feedNameCategory" | "feed" | "medicineNameCategory" | "medicineNameAdd" | "medicinePurchess" | "medicineStock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      BranchEmployee: {
        payload: Prisma.$BranchEmployeePayload<ExtArgs>
        fields: Prisma.BranchEmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchEmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchEmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchEmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchEmployeePayload>
          }
          findFirst: {
            args: Prisma.BranchEmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchEmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchEmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchEmployeePayload>
          }
          findMany: {
            args: Prisma.BranchEmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchEmployeePayload>[]
          }
          create: {
            args: Prisma.BranchEmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchEmployeePayload>
          }
          createMany: {
            args: Prisma.BranchEmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchEmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchEmployeePayload>[]
          }
          delete: {
            args: Prisma.BranchEmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchEmployeePayload>
          }
          update: {
            args: Prisma.BranchEmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchEmployeePayload>
          }
          deleteMany: {
            args: Prisma.BranchEmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchEmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchEmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchEmployeePayload>[]
          }
          upsert: {
            args: Prisma.BranchEmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchEmployeePayload>
          }
          aggregate: {
            args: Prisma.BranchEmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranchEmployee>
          }
          groupBy: {
            args: Prisma.BranchEmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchEmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchEmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<BranchEmployeeCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Flock: {
        payload: Prisma.$FlockPayload<ExtArgs>
        fields: Prisma.FlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlockPayload>
          }
          findFirst: {
            args: Prisma.FlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlockPayload>
          }
          findMany: {
            args: Prisma.FlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlockPayload>[]
          }
          create: {
            args: Prisma.FlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlockPayload>
          }
          createMany: {
            args: Prisma.FlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlockPayload>[]
          }
          delete: {
            args: Prisma.FlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlockPayload>
          }
          update: {
            args: Prisma.FlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlockPayload>
          }
          deleteMany: {
            args: Prisma.FlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlockPayload>[]
          }
          upsert: {
            args: Prisma.FlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlockPayload>
          }
          aggregate: {
            args: Prisma.FlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlock>
          }
          groupBy: {
            args: Prisma.FlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlockCountArgs<ExtArgs>
            result: $Utils.Optional<FlockCountAggregateOutputType> | number
          }
        }
      }
      FeedNameCategory: {
        payload: Prisma.$FeedNameCategoryPayload<ExtArgs>
        fields: Prisma.FeedNameCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedNameCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedNameCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedNameCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedNameCategoryPayload>
          }
          findFirst: {
            args: Prisma.FeedNameCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedNameCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedNameCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedNameCategoryPayload>
          }
          findMany: {
            args: Prisma.FeedNameCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedNameCategoryPayload>[]
          }
          create: {
            args: Prisma.FeedNameCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedNameCategoryPayload>
          }
          createMany: {
            args: Prisma.FeedNameCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedNameCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedNameCategoryPayload>[]
          }
          delete: {
            args: Prisma.FeedNameCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedNameCategoryPayload>
          }
          update: {
            args: Prisma.FeedNameCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedNameCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FeedNameCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedNameCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedNameCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedNameCategoryPayload>[]
          }
          upsert: {
            args: Prisma.FeedNameCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedNameCategoryPayload>
          }
          aggregate: {
            args: Prisma.FeedNameCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedNameCategory>
          }
          groupBy: {
            args: Prisma.FeedNameCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedNameCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedNameCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<FeedNameCategoryCountAggregateOutputType> | number
          }
        }
      }
      Feed: {
        payload: Prisma.$FeedPayload<ExtArgs>
        fields: Prisma.FeedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          findFirst: {
            args: Prisma.FeedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          findMany: {
            args: Prisma.FeedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>[]
          }
          create: {
            args: Prisma.FeedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          createMany: {
            args: Prisma.FeedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>[]
          }
          delete: {
            args: Prisma.FeedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          update: {
            args: Prisma.FeedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          deleteMany: {
            args: Prisma.FeedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>[]
          }
          upsert: {
            args: Prisma.FeedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          aggregate: {
            args: Prisma.FeedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeed>
          }
          groupBy: {
            args: Prisma.FeedGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedCountArgs<ExtArgs>
            result: $Utils.Optional<FeedCountAggregateOutputType> | number
          }
        }
      }
      MedicineNameCategory: {
        payload: Prisma.$MedicineNameCategoryPayload<ExtArgs>
        fields: Prisma.MedicineNameCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineNameCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineNameCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameCategoryPayload>
          }
          findFirst: {
            args: Prisma.MedicineNameCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineNameCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameCategoryPayload>
          }
          findMany: {
            args: Prisma.MedicineNameCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameCategoryPayload>[]
          }
          create: {
            args: Prisma.MedicineNameCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameCategoryPayload>
          }
          createMany: {
            args: Prisma.MedicineNameCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineNameCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameCategoryPayload>[]
          }
          delete: {
            args: Prisma.MedicineNameCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameCategoryPayload>
          }
          update: {
            args: Prisma.MedicineNameCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MedicineNameCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineNameCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicineNameCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameCategoryPayload>[]
          }
          upsert: {
            args: Prisma.MedicineNameCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameCategoryPayload>
          }
          aggregate: {
            args: Prisma.MedicineNameCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicineNameCategory>
          }
          groupBy: {
            args: Prisma.MedicineNameCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineNameCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineNameCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineNameCategoryCountAggregateOutputType> | number
          }
        }
      }
      MedicineNameAdd: {
        payload: Prisma.$MedicineNameAddPayload<ExtArgs>
        fields: Prisma.MedicineNameAddFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineNameAddFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameAddPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineNameAddFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameAddPayload>
          }
          findFirst: {
            args: Prisma.MedicineNameAddFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameAddPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineNameAddFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameAddPayload>
          }
          findMany: {
            args: Prisma.MedicineNameAddFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameAddPayload>[]
          }
          create: {
            args: Prisma.MedicineNameAddCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameAddPayload>
          }
          createMany: {
            args: Prisma.MedicineNameAddCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineNameAddCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameAddPayload>[]
          }
          delete: {
            args: Prisma.MedicineNameAddDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameAddPayload>
          }
          update: {
            args: Prisma.MedicineNameAddUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameAddPayload>
          }
          deleteMany: {
            args: Prisma.MedicineNameAddDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineNameAddUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicineNameAddUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameAddPayload>[]
          }
          upsert: {
            args: Prisma.MedicineNameAddUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineNameAddPayload>
          }
          aggregate: {
            args: Prisma.MedicineNameAddAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicineNameAdd>
          }
          groupBy: {
            args: Prisma.MedicineNameAddGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineNameAddGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineNameAddCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineNameAddCountAggregateOutputType> | number
          }
        }
      }
      MedicinePurchess: {
        payload: Prisma.$MedicinePurchessPayload<ExtArgs>
        fields: Prisma.MedicinePurchessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicinePurchessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePurchessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicinePurchessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePurchessPayload>
          }
          findFirst: {
            args: Prisma.MedicinePurchessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePurchessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicinePurchessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePurchessPayload>
          }
          findMany: {
            args: Prisma.MedicinePurchessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePurchessPayload>[]
          }
          create: {
            args: Prisma.MedicinePurchessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePurchessPayload>
          }
          createMany: {
            args: Prisma.MedicinePurchessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicinePurchessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePurchessPayload>[]
          }
          delete: {
            args: Prisma.MedicinePurchessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePurchessPayload>
          }
          update: {
            args: Prisma.MedicinePurchessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePurchessPayload>
          }
          deleteMany: {
            args: Prisma.MedicinePurchessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicinePurchessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicinePurchessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePurchessPayload>[]
          }
          upsert: {
            args: Prisma.MedicinePurchessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePurchessPayload>
          }
          aggregate: {
            args: Prisma.MedicinePurchessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicinePurchess>
          }
          groupBy: {
            args: Prisma.MedicinePurchessGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicinePurchessGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicinePurchessCountArgs<ExtArgs>
            result: $Utils.Optional<MedicinePurchessCountAggregateOutputType> | number
          }
        }
      }
      MedicineStock: {
        payload: Prisma.$MedicineStockPayload<ExtArgs>
        fields: Prisma.MedicineStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineStockPayload>
          }
          findFirst: {
            args: Prisma.MedicineStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineStockPayload>
          }
          findMany: {
            args: Prisma.MedicineStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineStockPayload>[]
          }
          create: {
            args: Prisma.MedicineStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineStockPayload>
          }
          createMany: {
            args: Prisma.MedicineStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineStockPayload>[]
          }
          delete: {
            args: Prisma.MedicineStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineStockPayload>
          }
          update: {
            args: Prisma.MedicineStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineStockPayload>
          }
          deleteMany: {
            args: Prisma.MedicineStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicineStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineStockPayload>[]
          }
          upsert: {
            args: Prisma.MedicineStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineStockPayload>
          }
          aggregate: {
            args: Prisma.MedicineStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicineStock>
          }
          groupBy: {
            args: Prisma.MedicineStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineStockCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineStockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    branch?: BranchOmit
    customer?: CustomerOmit
    address?: AddressOmit
    branchEmployee?: BranchEmployeeOmit
    employee?: EmployeeOmit
    flock?: FlockOmit
    feedNameCategory?: FeedNameCategoryOmit
    feed?: FeedOmit
    medicineNameCategory?: MedicineNameCategoryOmit
    medicineNameAdd?: MedicineNameAddOmit
    medicinePurchess?: MedicinePurchessOmit
    medicineStock?: MedicineStockOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    customers: number
    employees: number
    branchEmployees: number
    flocks: number
    Feed: number
    MedicineStock: number
    MedicinePurchess: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | BranchCountOutputTypeCountCustomersArgs
    employees?: boolean | BranchCountOutputTypeCountEmployeesArgs
    branchEmployees?: boolean | BranchCountOutputTypeCountBranchEmployeesArgs
    flocks?: boolean | BranchCountOutputTypeCountFlocksArgs
    Feed?: boolean | BranchCountOutputTypeCountFeedArgs
    MedicineStock?: boolean | BranchCountOutputTypeCountMedicineStockArgs
    MedicinePurchess?: boolean | BranchCountOutputTypeCountMedicinePurchessArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountBranchEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchEmployeeWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountFlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlockWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountFeedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountMedicineStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineStockWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountMedicinePurchessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicinePurchessWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    flocks: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flocks?: boolean | CustomerCountOutputTypeCountFlocksArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountFlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlockWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    branchEmployees: number
    flocks: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branchEmployees?: boolean | EmployeeCountOutputTypeCountBranchEmployeesArgs
    flocks?: boolean | EmployeeCountOutputTypeCountFlocksArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountBranchEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchEmployeeWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountFlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlockWhereInput
  }


  /**
   * Count Type FeedNameCategoryCountOutputType
   */

  export type FeedNameCategoryCountOutputType = {
    feeds: number
  }

  export type FeedNameCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feeds?: boolean | FeedNameCategoryCountOutputTypeCountFeedsArgs
  }

  // Custom InputTypes
  /**
   * FeedNameCategoryCountOutputType without action
   */
  export type FeedNameCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategoryCountOutputType
     */
    select?: FeedNameCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeedNameCategoryCountOutputType without action
   */
  export type FeedNameCategoryCountOutputTypeCountFeedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedWhereInput
  }


  /**
   * Count Type MedicineNameCategoryCountOutputType
   */

  export type MedicineNameCategoryCountOutputType = {
    medicineNameAdd: number
    MedicineStock: number
    MedicinePurchess: number
  }

  export type MedicineNameCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineNameAdd?: boolean | MedicineNameCategoryCountOutputTypeCountMedicineNameAddArgs
    MedicineStock?: boolean | MedicineNameCategoryCountOutputTypeCountMedicineStockArgs
    MedicinePurchess?: boolean | MedicineNameCategoryCountOutputTypeCountMedicinePurchessArgs
  }

  // Custom InputTypes
  /**
   * MedicineNameCategoryCountOutputType without action
   */
  export type MedicineNameCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategoryCountOutputType
     */
    select?: MedicineNameCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineNameCategoryCountOutputType without action
   */
  export type MedicineNameCategoryCountOutputTypeCountMedicineNameAddArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineNameAddWhereInput
  }

  /**
   * MedicineNameCategoryCountOutputType without action
   */
  export type MedicineNameCategoryCountOutputTypeCountMedicineStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineStockWhereInput
  }

  /**
   * MedicineNameCategoryCountOutputType without action
   */
  export type MedicineNameCategoryCountOutputTypeCountMedicinePurchessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicinePurchessWhereInput
  }


  /**
   * Count Type MedicineNameAddCountOutputType
   */

  export type MedicineNameAddCountOutputType = {
    MedicineStock: number
    MedicinePurchess: number
  }

  export type MedicineNameAddCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MedicineStock?: boolean | MedicineNameAddCountOutputTypeCountMedicineStockArgs
    MedicinePurchess?: boolean | MedicineNameAddCountOutputTypeCountMedicinePurchessArgs
  }

  // Custom InputTypes
  /**
   * MedicineNameAddCountOutputType without action
   */
  export type MedicineNameAddCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAddCountOutputType
     */
    select?: MedicineNameAddCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineNameAddCountOutputType without action
   */
  export type MedicineNameAddCountOutputTypeCountMedicineStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineStockWhereInput
  }

  /**
   * MedicineNameAddCountOutputType without action
   */
  export type MedicineNameAddCountOutputTypeCountMedicinePurchessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicinePurchessWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    locationName: string | null
    type: $Enums.BranchType | null
    branchCode: string | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    locationName: string | null
    type: $Enums.BranchType | null
    branchCode: string | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    locationName: number
    type: number
    branchCode: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    locationName?: true
    type?: true
    branchCode?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    locationName?: true
    type?: true
    branchCode?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    locationName?: true
    type?: true
    branchCode?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationName?: boolean
    type?: boolean
    branchCode?: boolean
    customers?: boolean | Branch$customersArgs<ExtArgs>
    employees?: boolean | Branch$employeesArgs<ExtArgs>
    branchEmployees?: boolean | Branch$branchEmployeesArgs<ExtArgs>
    flocks?: boolean | Branch$flocksArgs<ExtArgs>
    Feed?: boolean | Branch$FeedArgs<ExtArgs>
    MedicineStock?: boolean | Branch$MedicineStockArgs<ExtArgs>
    MedicinePurchess?: boolean | Branch$MedicinePurchessArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationName?: boolean
    type?: boolean
    branchCode?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationName?: boolean
    type?: boolean
    branchCode?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    locationName?: boolean
    type?: boolean
    branchCode?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationName" | "type" | "branchCode", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | Branch$customersArgs<ExtArgs>
    employees?: boolean | Branch$employeesArgs<ExtArgs>
    branchEmployees?: boolean | Branch$branchEmployeesArgs<ExtArgs>
    flocks?: boolean | Branch$flocksArgs<ExtArgs>
    Feed?: boolean | Branch$FeedArgs<ExtArgs>
    MedicineStock?: boolean | Branch$MedicineStockArgs<ExtArgs>
    MedicinePurchess?: boolean | Branch$MedicinePurchessArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BranchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      branchEmployees: Prisma.$BranchEmployeePayload<ExtArgs>[]
      flocks: Prisma.$FlockPayload<ExtArgs>[]
      Feed: Prisma.$FeedPayload<ExtArgs>[]
      MedicineStock: Prisma.$MedicineStockPayload<ExtArgs>[]
      MedicinePurchess: Prisma.$MedicinePurchessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locationName: string
      type: $Enums.BranchType
      branchCode: string
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches and returns the data updated in the database.
     * @param {BranchUpdateManyAndReturnArgs} args - Arguments to update many Branches.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BranchUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends Branch$customersArgs<ExtArgs> = {}>(args?: Subset<T, Branch$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employees<T extends Branch$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Branch$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    branchEmployees<T extends Branch$branchEmployeesArgs<ExtArgs> = {}>(args?: Subset<T, Branch$branchEmployeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flocks<T extends Branch$flocksArgs<ExtArgs> = {}>(args?: Subset<T, Branch$flocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Feed<T extends Branch$FeedArgs<ExtArgs> = {}>(args?: Subset<T, Branch$FeedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MedicineStock<T extends Branch$MedicineStockArgs<ExtArgs> = {}>(args?: Subset<T, Branch$MedicineStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MedicinePurchess<T extends Branch$MedicinePurchessArgs<ExtArgs> = {}>(args?: Subset<T, Branch$MedicinePurchessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly locationName: FieldRef<"Branch", 'String'>
    readonly type: FieldRef<"Branch", 'BranchType'>
    readonly branchCode: FieldRef<"Branch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch updateManyAndReturn
   */
  export type BranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.customers
   */
  export type Branch$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Branch.employees
   */
  export type Branch$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Branch.branchEmployees
   */
  export type Branch$branchEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
    where?: BranchEmployeeWhereInput
    orderBy?: BranchEmployeeOrderByWithRelationInput | BranchEmployeeOrderByWithRelationInput[]
    cursor?: BranchEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchEmployeeScalarFieldEnum | BranchEmployeeScalarFieldEnum[]
  }

  /**
   * Branch.flocks
   */
  export type Branch$flocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    where?: FlockWhereInput
    orderBy?: FlockOrderByWithRelationInput | FlockOrderByWithRelationInput[]
    cursor?: FlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlockScalarFieldEnum | FlockScalarFieldEnum[]
  }

  /**
   * Branch.Feed
   */
  export type Branch$FeedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    where?: FeedWhereInput
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[]
    cursor?: FeedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[]
  }

  /**
   * Branch.MedicineStock
   */
  export type Branch$MedicineStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    where?: MedicineStockWhereInput
    orderBy?: MedicineStockOrderByWithRelationInput | MedicineStockOrderByWithRelationInput[]
    cursor?: MedicineStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineStockScalarFieldEnum | MedicineStockScalarFieldEnum[]
  }

  /**
   * Branch.MedicinePurchess
   */
  export type Branch$MedicinePurchessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    where?: MedicinePurchessWhereInput
    orderBy?: MedicinePurchessOrderByWithRelationInput | MedicinePurchessOrderByWithRelationInput[]
    cursor?: MedicinePurchessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicinePurchessScalarFieldEnum | MedicinePurchessScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    totalShed: number | null
    totalSquare: number | null
    capacity: number | null
  }

  export type CustomerSumAggregateOutputType = {
    totalShed: number | null
    totalSquare: number | null
    capacity: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    branchCode: string | null
    farmCode: string | null
    name: string | null
    farmType: $Enums.Custtype | null
    totalShed: number | null
    totalSquare: number | null
    capacity: number | null
    nid: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    branchCode: string | null
    farmCode: string | null
    name: string | null
    farmType: $Enums.Custtype | null
    totalShed: number | null
    totalSquare: number | null
    capacity: number | null
    nid: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    branchCode: number
    farmCode: number
    name: number
    farmType: number
    totalShed: number
    totalSquare: number
    capacity: number
    nid: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    totalShed?: true
    totalSquare?: true
    capacity?: true
  }

  export type CustomerSumAggregateInputType = {
    totalShed?: true
    totalSquare?: true
    capacity?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    branchCode?: true
    farmCode?: true
    name?: true
    farmType?: true
    totalShed?: true
    totalSquare?: true
    capacity?: true
    nid?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    branchCode?: true
    farmCode?: true
    name?: true
    farmType?: true
    totalShed?: true
    totalSquare?: true
    capacity?: true
    nid?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    branchCode?: true
    farmCode?: true
    name?: true
    farmType?: true
    totalShed?: true
    totalSquare?: true
    capacity?: true
    nid?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    branchCode: string
    farmCode: string
    name: string
    farmType: $Enums.Custtype
    totalShed: number
    totalSquare: number
    capacity: number
    nid: string
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchCode?: boolean
    farmCode?: boolean
    name?: boolean
    farmType?: boolean
    totalShed?: boolean
    totalSquare?: boolean
    capacity?: boolean
    nid?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    address?: boolean | Customer$addressArgs<ExtArgs>
    flocks?: boolean | Customer$flocksArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchCode?: boolean
    farmCode?: boolean
    name?: boolean
    farmType?: boolean
    totalShed?: boolean
    totalSquare?: boolean
    capacity?: boolean
    nid?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchCode?: boolean
    farmCode?: boolean
    name?: boolean
    farmType?: boolean
    totalShed?: boolean
    totalSquare?: boolean
    capacity?: boolean
    nid?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    branchCode?: boolean
    farmCode?: boolean
    name?: boolean
    farmType?: boolean
    totalShed?: boolean
    totalSquare?: boolean
    capacity?: boolean
    nid?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "branchCode" | "farmCode" | "name" | "farmType" | "totalShed" | "totalSquare" | "capacity" | "nid", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    address?: boolean | Customer$addressArgs<ExtArgs>
    flocks?: boolean | Customer$flocksArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      address: Prisma.$AddressPayload<ExtArgs> | null
      flocks: Prisma.$FlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      branchCode: string
      farmCode: string
      name: string
      farmType: $Enums.Custtype
      totalShed: number
      totalSquare: number
      capacity: number
      nid: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends Customer$addressArgs<ExtArgs> = {}>(args?: Subset<T, Customer$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    flocks<T extends Customer$flocksArgs<ExtArgs> = {}>(args?: Subset<T, Customer$flocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly branchCode: FieldRef<"Customer", 'String'>
    readonly farmCode: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly farmType: FieldRef<"Customer", 'Custtype'>
    readonly totalShed: FieldRef<"Customer", 'Int'>
    readonly totalSquare: FieldRef<"Customer", 'Int'>
    readonly capacity: FieldRef<"Customer", 'Int'>
    readonly nid: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.address
   */
  export type Customer$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Customer.flocks
   */
  export type Customer$flocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    where?: FlockWhereInput
    orderBy?: FlockOrderByWithRelationInput | FlockOrderByWithRelationInput[]
    cursor?: FlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlockScalarFieldEnum | FlockScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    village: string | null
    post: string | null
    union: string | null
    thana: string | null
    upazila: string | null
    phoneNumber: string | null
    city: string | null
    employeeId: string | null
    farmCode: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    village: string | null
    post: string | null
    union: string | null
    thana: string | null
    upazila: string | null
    phoneNumber: string | null
    city: string | null
    employeeId: string | null
    farmCode: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    village: number
    post: number
    union: number
    thana: number
    upazila: number
    phoneNumber: number
    city: number
    employeeId: number
    farmCode: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    village?: true
    post?: true
    union?: true
    thana?: true
    upazila?: true
    phoneNumber?: true
    city?: true
    employeeId?: true
    farmCode?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    village?: true
    post?: true
    union?: true
    thana?: true
    upazila?: true
    phoneNumber?: true
    city?: true
    employeeId?: true
    farmCode?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    village?: true
    post?: true
    union?: true
    thana?: true
    upazila?: true
    phoneNumber?: true
    city?: true
    employeeId?: true
    farmCode?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    village: string
    post: string
    union: string | null
    thana: string | null
    upazila: string
    phoneNumber: string
    city: string
    employeeId: string | null
    farmCode: string | null
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    village?: boolean
    post?: boolean
    union?: boolean
    thana?: boolean
    upazila?: boolean
    phoneNumber?: boolean
    city?: boolean
    employeeId?: boolean
    farmCode?: boolean
    employee?: boolean | Address$employeeArgs<ExtArgs>
    customer?: boolean | Address$customerArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    village?: boolean
    post?: boolean
    union?: boolean
    thana?: boolean
    upazila?: boolean
    phoneNumber?: boolean
    city?: boolean
    employeeId?: boolean
    farmCode?: boolean
    employee?: boolean | Address$employeeArgs<ExtArgs>
    customer?: boolean | Address$customerArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    village?: boolean
    post?: boolean
    union?: boolean
    thana?: boolean
    upazila?: boolean
    phoneNumber?: boolean
    city?: boolean
    employeeId?: boolean
    farmCode?: boolean
    employee?: boolean | Address$employeeArgs<ExtArgs>
    customer?: boolean | Address$customerArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    village?: boolean
    post?: boolean
    union?: boolean
    thana?: boolean
    upazila?: boolean
    phoneNumber?: boolean
    city?: boolean
    employeeId?: boolean
    farmCode?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "village" | "post" | "union" | "thana" | "upazila" | "phoneNumber" | "city" | "employeeId" | "farmCode", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Address$employeeArgs<ExtArgs>
    customer?: boolean | Address$customerArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Address$employeeArgs<ExtArgs>
    customer?: boolean | Address$customerArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Address$employeeArgs<ExtArgs>
    customer?: boolean | Address$customerArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      village: string
      post: string
      union: string | null
      thana: string | null
      upazila: string
      phoneNumber: string
      city: string
      employeeId: string | null
      farmCode: string | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends Address$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Address$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customer<T extends Address$customerArgs<ExtArgs> = {}>(args?: Subset<T, Address$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly village: FieldRef<"Address", 'String'>
    readonly post: FieldRef<"Address", 'String'>
    readonly union: FieldRef<"Address", 'String'>
    readonly thana: FieldRef<"Address", 'String'>
    readonly upazila: FieldRef<"Address", 'String'>
    readonly phoneNumber: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly employeeId: FieldRef<"Address", 'String'>
    readonly farmCode: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.employee
   */
  export type Address$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Address.customer
   */
  export type Address$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model BranchEmployee
   */

  export type AggregateBranchEmployee = {
    _count: BranchEmployeeCountAggregateOutputType | null
    _min: BranchEmployeeMinAggregateOutputType | null
    _max: BranchEmployeeMaxAggregateOutputType | null
  }

  export type BranchEmployeeMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    branchCode: string | null
  }

  export type BranchEmployeeMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    branchCode: string | null
  }

  export type BranchEmployeeCountAggregateOutputType = {
    id: number
    employeeId: number
    branchCode: number
    _all: number
  }


  export type BranchEmployeeMinAggregateInputType = {
    id?: true
    employeeId?: true
    branchCode?: true
  }

  export type BranchEmployeeMaxAggregateInputType = {
    id?: true
    employeeId?: true
    branchCode?: true
  }

  export type BranchEmployeeCountAggregateInputType = {
    id?: true
    employeeId?: true
    branchCode?: true
    _all?: true
  }

  export type BranchEmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BranchEmployee to aggregate.
     */
    where?: BranchEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchEmployees to fetch.
     */
    orderBy?: BranchEmployeeOrderByWithRelationInput | BranchEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BranchEmployees
    **/
    _count?: true | BranchEmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchEmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchEmployeeMaxAggregateInputType
  }

  export type GetBranchEmployeeAggregateType<T extends BranchEmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateBranchEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranchEmployee[P]>
      : GetScalarType<T[P], AggregateBranchEmployee[P]>
  }




  export type BranchEmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchEmployeeWhereInput
    orderBy?: BranchEmployeeOrderByWithAggregationInput | BranchEmployeeOrderByWithAggregationInput[]
    by: BranchEmployeeScalarFieldEnum[] | BranchEmployeeScalarFieldEnum
    having?: BranchEmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchEmployeeCountAggregateInputType | true
    _min?: BranchEmployeeMinAggregateInputType
    _max?: BranchEmployeeMaxAggregateInputType
  }

  export type BranchEmployeeGroupByOutputType = {
    id: string
    employeeId: string
    branchCode: string
    _count: BranchEmployeeCountAggregateOutputType | null
    _min: BranchEmployeeMinAggregateOutputType | null
    _max: BranchEmployeeMaxAggregateOutputType | null
  }

  type GetBranchEmployeeGroupByPayload<T extends BranchEmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchEmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchEmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchEmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], BranchEmployeeGroupByOutputType[P]>
        }
      >
    >


  export type BranchEmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    branchCode?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branchEmployee"]>

  export type BranchEmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    branchCode?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branchEmployee"]>

  export type BranchEmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    branchCode?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branchEmployee"]>

  export type BranchEmployeeSelectScalar = {
    id?: boolean
    employeeId?: boolean
    branchCode?: boolean
  }

  export type BranchEmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "branchCode", ExtArgs["result"]["branchEmployee"]>
  export type BranchEmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type BranchEmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type BranchEmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $BranchEmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BranchEmployee"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      branchCode: string
    }, ExtArgs["result"]["branchEmployee"]>
    composites: {}
  }

  type BranchEmployeeGetPayload<S extends boolean | null | undefined | BranchEmployeeDefaultArgs> = $Result.GetResult<Prisma.$BranchEmployeePayload, S>

  type BranchEmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchEmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchEmployeeCountAggregateInputType | true
    }

  export interface BranchEmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BranchEmployee'], meta: { name: 'BranchEmployee' } }
    /**
     * Find zero or one BranchEmployee that matches the filter.
     * @param {BranchEmployeeFindUniqueArgs} args - Arguments to find a BranchEmployee
     * @example
     * // Get one BranchEmployee
     * const branchEmployee = await prisma.branchEmployee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchEmployeeFindUniqueArgs>(args: SelectSubset<T, BranchEmployeeFindUniqueArgs<ExtArgs>>): Prisma__BranchEmployeeClient<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BranchEmployee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchEmployeeFindUniqueOrThrowArgs} args - Arguments to find a BranchEmployee
     * @example
     * // Get one BranchEmployee
     * const branchEmployee = await prisma.branchEmployee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchEmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchEmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchEmployeeClient<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BranchEmployee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchEmployeeFindFirstArgs} args - Arguments to find a BranchEmployee
     * @example
     * // Get one BranchEmployee
     * const branchEmployee = await prisma.branchEmployee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchEmployeeFindFirstArgs>(args?: SelectSubset<T, BranchEmployeeFindFirstArgs<ExtArgs>>): Prisma__BranchEmployeeClient<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BranchEmployee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchEmployeeFindFirstOrThrowArgs} args - Arguments to find a BranchEmployee
     * @example
     * // Get one BranchEmployee
     * const branchEmployee = await prisma.branchEmployee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchEmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchEmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchEmployeeClient<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BranchEmployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchEmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BranchEmployees
     * const branchEmployees = await prisma.branchEmployee.findMany()
     * 
     * // Get first 10 BranchEmployees
     * const branchEmployees = await prisma.branchEmployee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchEmployeeWithIdOnly = await prisma.branchEmployee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchEmployeeFindManyArgs>(args?: SelectSubset<T, BranchEmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BranchEmployee.
     * @param {BranchEmployeeCreateArgs} args - Arguments to create a BranchEmployee.
     * @example
     * // Create one BranchEmployee
     * const BranchEmployee = await prisma.branchEmployee.create({
     *   data: {
     *     // ... data to create a BranchEmployee
     *   }
     * })
     * 
     */
    create<T extends BranchEmployeeCreateArgs>(args: SelectSubset<T, BranchEmployeeCreateArgs<ExtArgs>>): Prisma__BranchEmployeeClient<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BranchEmployees.
     * @param {BranchEmployeeCreateManyArgs} args - Arguments to create many BranchEmployees.
     * @example
     * // Create many BranchEmployees
     * const branchEmployee = await prisma.branchEmployee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchEmployeeCreateManyArgs>(args?: SelectSubset<T, BranchEmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BranchEmployees and returns the data saved in the database.
     * @param {BranchEmployeeCreateManyAndReturnArgs} args - Arguments to create many BranchEmployees.
     * @example
     * // Create many BranchEmployees
     * const branchEmployee = await prisma.branchEmployee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BranchEmployees and only return the `id`
     * const branchEmployeeWithIdOnly = await prisma.branchEmployee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchEmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchEmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BranchEmployee.
     * @param {BranchEmployeeDeleteArgs} args - Arguments to delete one BranchEmployee.
     * @example
     * // Delete one BranchEmployee
     * const BranchEmployee = await prisma.branchEmployee.delete({
     *   where: {
     *     // ... filter to delete one BranchEmployee
     *   }
     * })
     * 
     */
    delete<T extends BranchEmployeeDeleteArgs>(args: SelectSubset<T, BranchEmployeeDeleteArgs<ExtArgs>>): Prisma__BranchEmployeeClient<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BranchEmployee.
     * @param {BranchEmployeeUpdateArgs} args - Arguments to update one BranchEmployee.
     * @example
     * // Update one BranchEmployee
     * const branchEmployee = await prisma.branchEmployee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchEmployeeUpdateArgs>(args: SelectSubset<T, BranchEmployeeUpdateArgs<ExtArgs>>): Prisma__BranchEmployeeClient<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BranchEmployees.
     * @param {BranchEmployeeDeleteManyArgs} args - Arguments to filter BranchEmployees to delete.
     * @example
     * // Delete a few BranchEmployees
     * const { count } = await prisma.branchEmployee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchEmployeeDeleteManyArgs>(args?: SelectSubset<T, BranchEmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BranchEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchEmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BranchEmployees
     * const branchEmployee = await prisma.branchEmployee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchEmployeeUpdateManyArgs>(args: SelectSubset<T, BranchEmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BranchEmployees and returns the data updated in the database.
     * @param {BranchEmployeeUpdateManyAndReturnArgs} args - Arguments to update many BranchEmployees.
     * @example
     * // Update many BranchEmployees
     * const branchEmployee = await prisma.branchEmployee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BranchEmployees and only return the `id`
     * const branchEmployeeWithIdOnly = await prisma.branchEmployee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BranchEmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchEmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BranchEmployee.
     * @param {BranchEmployeeUpsertArgs} args - Arguments to update or create a BranchEmployee.
     * @example
     * // Update or create a BranchEmployee
     * const branchEmployee = await prisma.branchEmployee.upsert({
     *   create: {
     *     // ... data to create a BranchEmployee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BranchEmployee we want to update
     *   }
     * })
     */
    upsert<T extends BranchEmployeeUpsertArgs>(args: SelectSubset<T, BranchEmployeeUpsertArgs<ExtArgs>>): Prisma__BranchEmployeeClient<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BranchEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchEmployeeCountArgs} args - Arguments to filter BranchEmployees to count.
     * @example
     * // Count the number of BranchEmployees
     * const count = await prisma.branchEmployee.count({
     *   where: {
     *     // ... the filter for the BranchEmployees we want to count
     *   }
     * })
    **/
    count<T extends BranchEmployeeCountArgs>(
      args?: Subset<T, BranchEmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchEmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BranchEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchEmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchEmployeeAggregateArgs>(args: Subset<T, BranchEmployeeAggregateArgs>): Prisma.PrismaPromise<GetBranchEmployeeAggregateType<T>>

    /**
     * Group by BranchEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchEmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchEmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchEmployeeGroupByArgs['orderBy'] }
        : { orderBy?: BranchEmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchEmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BranchEmployee model
   */
  readonly fields: BranchEmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BranchEmployee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchEmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BranchEmployee model
   */
  interface BranchEmployeeFieldRefs {
    readonly id: FieldRef<"BranchEmployee", 'String'>
    readonly employeeId: FieldRef<"BranchEmployee", 'String'>
    readonly branchCode: FieldRef<"BranchEmployee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BranchEmployee findUnique
   */
  export type BranchEmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which BranchEmployee to fetch.
     */
    where: BranchEmployeeWhereUniqueInput
  }

  /**
   * BranchEmployee findUniqueOrThrow
   */
  export type BranchEmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which BranchEmployee to fetch.
     */
    where: BranchEmployeeWhereUniqueInput
  }

  /**
   * BranchEmployee findFirst
   */
  export type BranchEmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which BranchEmployee to fetch.
     */
    where?: BranchEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchEmployees to fetch.
     */
    orderBy?: BranchEmployeeOrderByWithRelationInput | BranchEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchEmployees.
     */
    cursor?: BranchEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchEmployees.
     */
    distinct?: BranchEmployeeScalarFieldEnum | BranchEmployeeScalarFieldEnum[]
  }

  /**
   * BranchEmployee findFirstOrThrow
   */
  export type BranchEmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which BranchEmployee to fetch.
     */
    where?: BranchEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchEmployees to fetch.
     */
    orderBy?: BranchEmployeeOrderByWithRelationInput | BranchEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchEmployees.
     */
    cursor?: BranchEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchEmployees.
     */
    distinct?: BranchEmployeeScalarFieldEnum | BranchEmployeeScalarFieldEnum[]
  }

  /**
   * BranchEmployee findMany
   */
  export type BranchEmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which BranchEmployees to fetch.
     */
    where?: BranchEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchEmployees to fetch.
     */
    orderBy?: BranchEmployeeOrderByWithRelationInput | BranchEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BranchEmployees.
     */
    cursor?: BranchEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchEmployees.
     */
    skip?: number
    distinct?: BranchEmployeeScalarFieldEnum | BranchEmployeeScalarFieldEnum[]
  }

  /**
   * BranchEmployee create
   */
  export type BranchEmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a BranchEmployee.
     */
    data: XOR<BranchEmployeeCreateInput, BranchEmployeeUncheckedCreateInput>
  }

  /**
   * BranchEmployee createMany
   */
  export type BranchEmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BranchEmployees.
     */
    data: BranchEmployeeCreateManyInput | BranchEmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BranchEmployee createManyAndReturn
   */
  export type BranchEmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many BranchEmployees.
     */
    data: BranchEmployeeCreateManyInput | BranchEmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BranchEmployee update
   */
  export type BranchEmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a BranchEmployee.
     */
    data: XOR<BranchEmployeeUpdateInput, BranchEmployeeUncheckedUpdateInput>
    /**
     * Choose, which BranchEmployee to update.
     */
    where: BranchEmployeeWhereUniqueInput
  }

  /**
   * BranchEmployee updateMany
   */
  export type BranchEmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BranchEmployees.
     */
    data: XOR<BranchEmployeeUpdateManyMutationInput, BranchEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which BranchEmployees to update
     */
    where?: BranchEmployeeWhereInput
    /**
     * Limit how many BranchEmployees to update.
     */
    limit?: number
  }

  /**
   * BranchEmployee updateManyAndReturn
   */
  export type BranchEmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * The data used to update BranchEmployees.
     */
    data: XOR<BranchEmployeeUpdateManyMutationInput, BranchEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which BranchEmployees to update
     */
    where?: BranchEmployeeWhereInput
    /**
     * Limit how many BranchEmployees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BranchEmployee upsert
   */
  export type BranchEmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the BranchEmployee to update in case it exists.
     */
    where: BranchEmployeeWhereUniqueInput
    /**
     * In case the BranchEmployee found by the `where` argument doesn't exist, create a new BranchEmployee with this data.
     */
    create: XOR<BranchEmployeeCreateInput, BranchEmployeeUncheckedCreateInput>
    /**
     * In case the BranchEmployee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchEmployeeUpdateInput, BranchEmployeeUncheckedUpdateInput>
  }

  /**
   * BranchEmployee delete
   */
  export type BranchEmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
    /**
     * Filter which BranchEmployee to delete.
     */
    where: BranchEmployeeWhereUniqueInput
  }

  /**
   * BranchEmployee deleteMany
   */
  export type BranchEmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BranchEmployees to delete
     */
    where?: BranchEmployeeWhereInput
    /**
     * Limit how many BranchEmployees to delete.
     */
    limit?: number
  }

  /**
   * BranchEmployee without action
   */
  export type BranchEmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    employeeId: string | null
    name: string | null
    workingLocation: string | null
    designation: string | null
    branchId: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    employeeId: string | null
    name: string | null
    workingLocation: string | null
    designation: string | null
    branchId: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    employeeId: number
    name: number
    workingLocation: number
    designation: number
    branchId: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    workingLocation?: true
    designation?: true
    branchId?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    workingLocation?: true
    designation?: true
    branchId?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    employeeId?: true
    name?: true
    workingLocation?: true
    designation?: true
    branchId?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branchId: string | null
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    workingLocation?: boolean
    designation?: boolean
    branchId?: boolean
    branch?: boolean | Employee$branchArgs<ExtArgs>
    branchEmployees?: boolean | Employee$branchEmployeesArgs<ExtArgs>
    address?: boolean | Employee$addressArgs<ExtArgs>
    flocks?: boolean | Employee$flocksArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    workingLocation?: boolean
    designation?: boolean
    branchId?: boolean
    branch?: boolean | Employee$branchArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    name?: boolean
    workingLocation?: boolean
    designation?: boolean
    branchId?: boolean
    branch?: boolean | Employee$branchArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    employeeId?: boolean
    name?: boolean
    workingLocation?: boolean
    designation?: boolean
    branchId?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "name" | "workingLocation" | "designation" | "branchId", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Employee$branchArgs<ExtArgs>
    branchEmployees?: boolean | Employee$branchEmployeesArgs<ExtArgs>
    address?: boolean | Employee$addressArgs<ExtArgs>
    flocks?: boolean | Employee$flocksArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Employee$branchArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | Employee$branchArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs> | null
      branchEmployees: Prisma.$BranchEmployeePayload<ExtArgs>[]
      address: Prisma.$AddressPayload<ExtArgs> | null
      flocks: Prisma.$FlockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeId: string
      name: string
      workingLocation: string
      designation: string
      branchId: string | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends Employee$branchArgs<ExtArgs> = {}>(args?: Subset<T, Employee$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    branchEmployees<T extends Employee$branchEmployeesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$branchEmployeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchEmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends Employee$addressArgs<ExtArgs> = {}>(args?: Subset<T, Employee$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    flocks<T extends Employee$flocksArgs<ExtArgs> = {}>(args?: Subset<T, Employee$flocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly employeeId: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly workingLocation: FieldRef<"Employee", 'String'>
    readonly designation: FieldRef<"Employee", 'String'>
    readonly branchId: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.branch
   */
  export type Employee$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Employee.branchEmployees
   */
  export type Employee$branchEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchEmployee
     */
    select?: BranchEmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchEmployee
     */
    omit?: BranchEmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchEmployeeInclude<ExtArgs> | null
    where?: BranchEmployeeWhereInput
    orderBy?: BranchEmployeeOrderByWithRelationInput | BranchEmployeeOrderByWithRelationInput[]
    cursor?: BranchEmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchEmployeeScalarFieldEnum | BranchEmployeeScalarFieldEnum[]
  }

  /**
   * Employee.address
   */
  export type Employee$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Employee.flocks
   */
  export type Employee$flocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    where?: FlockWhereInput
    orderBy?: FlockOrderByWithRelationInput | FlockOrderByWithRelationInput[]
    cursor?: FlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlockScalarFieldEnum | FlockScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Flock
   */

  export type AggregateFlock = {
    _count: FlockCountAggregateOutputType | null
    _avg: FlockAvgAggregateOutputType | null
    _sum: FlockSumAggregateOutputType | null
    _min: FlockMinAggregateOutputType | null
    _max: FlockMaxAggregateOutputType | null
  }

  export type FlockAvgAggregateOutputType = {
    flockNumber: number | null
    docQuantity: number | null
    totalFeedKg: number | null
    totalMedicine: number | null
    fcr: number | null
    totalSellBirds: number | null
    mortality: number | null
  }

  export type FlockSumAggregateOutputType = {
    flockNumber: number | null
    docQuantity: number | null
    totalFeedKg: number | null
    totalMedicine: number | null
    fcr: number | null
    totalSellBirds: number | null
    mortality: number | null
  }

  export type FlockMinAggregateOutputType = {
    id: string | null
    flockNumber: number | null
    flockStatus: $Enums.FlockStatus | null
    startDate: Date | null
    endDate: Date | null
    executiveId: string | null
    farmCode: string | null
    docName: string | null
    docQuantity: number | null
    approvedBy: string | null
    branchCode: string | null
    totalFeedKg: number | null
    totalMedicine: number | null
    fcr: number | null
    totalSellBirds: number | null
    mortality: number | null
  }

  export type FlockMaxAggregateOutputType = {
    id: string | null
    flockNumber: number | null
    flockStatus: $Enums.FlockStatus | null
    startDate: Date | null
    endDate: Date | null
    executiveId: string | null
    farmCode: string | null
    docName: string | null
    docQuantity: number | null
    approvedBy: string | null
    branchCode: string | null
    totalFeedKg: number | null
    totalMedicine: number | null
    fcr: number | null
    totalSellBirds: number | null
    mortality: number | null
  }

  export type FlockCountAggregateOutputType = {
    id: number
    flockNumber: number
    flockStatus: number
    startDate: number
    endDate: number
    executiveId: number
    farmCode: number
    docName: number
    docQuantity: number
    approvedBy: number
    branchCode: number
    totalFeedKg: number
    totalMedicine: number
    fcr: number
    totalSellBirds: number
    mortality: number
    _all: number
  }


  export type FlockAvgAggregateInputType = {
    flockNumber?: true
    docQuantity?: true
    totalFeedKg?: true
    totalMedicine?: true
    fcr?: true
    totalSellBirds?: true
    mortality?: true
  }

  export type FlockSumAggregateInputType = {
    flockNumber?: true
    docQuantity?: true
    totalFeedKg?: true
    totalMedicine?: true
    fcr?: true
    totalSellBirds?: true
    mortality?: true
  }

  export type FlockMinAggregateInputType = {
    id?: true
    flockNumber?: true
    flockStatus?: true
    startDate?: true
    endDate?: true
    executiveId?: true
    farmCode?: true
    docName?: true
    docQuantity?: true
    approvedBy?: true
    branchCode?: true
    totalFeedKg?: true
    totalMedicine?: true
    fcr?: true
    totalSellBirds?: true
    mortality?: true
  }

  export type FlockMaxAggregateInputType = {
    id?: true
    flockNumber?: true
    flockStatus?: true
    startDate?: true
    endDate?: true
    executiveId?: true
    farmCode?: true
    docName?: true
    docQuantity?: true
    approvedBy?: true
    branchCode?: true
    totalFeedKg?: true
    totalMedicine?: true
    fcr?: true
    totalSellBirds?: true
    mortality?: true
  }

  export type FlockCountAggregateInputType = {
    id?: true
    flockNumber?: true
    flockStatus?: true
    startDate?: true
    endDate?: true
    executiveId?: true
    farmCode?: true
    docName?: true
    docQuantity?: true
    approvedBy?: true
    branchCode?: true
    totalFeedKg?: true
    totalMedicine?: true
    fcr?: true
    totalSellBirds?: true
    mortality?: true
    _all?: true
  }

  export type FlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flock to aggregate.
     */
    where?: FlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flocks to fetch.
     */
    orderBy?: FlockOrderByWithRelationInput | FlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flocks
    **/
    _count?: true | FlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlockMaxAggregateInputType
  }

  export type GetFlockAggregateType<T extends FlockAggregateArgs> = {
        [P in keyof T & keyof AggregateFlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlock[P]>
      : GetScalarType<T[P], AggregateFlock[P]>
  }




  export type FlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlockWhereInput
    orderBy?: FlockOrderByWithAggregationInput | FlockOrderByWithAggregationInput[]
    by: FlockScalarFieldEnum[] | FlockScalarFieldEnum
    having?: FlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlockCountAggregateInputType | true
    _avg?: FlockAvgAggregateInputType
    _sum?: FlockSumAggregateInputType
    _min?: FlockMinAggregateInputType
    _max?: FlockMaxAggregateInputType
  }

  export type FlockGroupByOutputType = {
    id: string
    flockNumber: number
    flockStatus: $Enums.FlockStatus
    startDate: Date
    endDate: Date | null
    executiveId: string
    farmCode: string
    docName: string
    docQuantity: number
    approvedBy: string | null
    branchCode: string
    totalFeedKg: number
    totalMedicine: number
    fcr: number
    totalSellBirds: number
    mortality: number
    _count: FlockCountAggregateOutputType | null
    _avg: FlockAvgAggregateOutputType | null
    _sum: FlockSumAggregateOutputType | null
    _min: FlockMinAggregateOutputType | null
    _max: FlockMaxAggregateOutputType | null
  }

  type GetFlockGroupByPayload<T extends FlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlockGroupByOutputType[P]>
            : GetScalarType<T[P], FlockGroupByOutputType[P]>
        }
      >
    >


  export type FlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flockNumber?: boolean
    flockStatus?: boolean
    startDate?: boolean
    endDate?: boolean
    executiveId?: boolean
    farmCode?: boolean
    docName?: boolean
    docQuantity?: boolean
    approvedBy?: boolean
    branchCode?: boolean
    totalFeedKg?: boolean
    totalMedicine?: boolean
    fcr?: boolean
    totalSellBirds?: boolean
    mortality?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flock"]>

  export type FlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flockNumber?: boolean
    flockStatus?: boolean
    startDate?: boolean
    endDate?: boolean
    executiveId?: boolean
    farmCode?: boolean
    docName?: boolean
    docQuantity?: boolean
    approvedBy?: boolean
    branchCode?: boolean
    totalFeedKg?: boolean
    totalMedicine?: boolean
    fcr?: boolean
    totalSellBirds?: boolean
    mortality?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flock"]>

  export type FlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flockNumber?: boolean
    flockStatus?: boolean
    startDate?: boolean
    endDate?: boolean
    executiveId?: boolean
    farmCode?: boolean
    docName?: boolean
    docQuantity?: boolean
    approvedBy?: boolean
    branchCode?: boolean
    totalFeedKg?: boolean
    totalMedicine?: boolean
    fcr?: boolean
    totalSellBirds?: boolean
    mortality?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flock"]>

  export type FlockSelectScalar = {
    id?: boolean
    flockNumber?: boolean
    flockStatus?: boolean
    startDate?: boolean
    endDate?: boolean
    executiveId?: boolean
    farmCode?: boolean
    docName?: boolean
    docQuantity?: boolean
    approvedBy?: boolean
    branchCode?: boolean
    totalFeedKg?: boolean
    totalMedicine?: boolean
    fcr?: boolean
    totalSellBirds?: boolean
    mortality?: boolean
  }

  export type FlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flockNumber" | "flockStatus" | "startDate" | "endDate" | "executiveId" | "farmCode" | "docName" | "docQuantity" | "approvedBy" | "branchCode" | "totalFeedKg" | "totalMedicine" | "fcr" | "totalSellBirds" | "mortality", ExtArgs["result"]["flock"]>
  export type FlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type FlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type FlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $FlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flock"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flockNumber: number
      flockStatus: $Enums.FlockStatus
      startDate: Date
      endDate: Date | null
      executiveId: string
      farmCode: string
      docName: string
      docQuantity: number
      approvedBy: string | null
      branchCode: string
      totalFeedKg: number
      totalMedicine: number
      fcr: number
      totalSellBirds: number
      mortality: number
    }, ExtArgs["result"]["flock"]>
    composites: {}
  }

  type FlockGetPayload<S extends boolean | null | undefined | FlockDefaultArgs> = $Result.GetResult<Prisma.$FlockPayload, S>

  type FlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlockCountAggregateInputType | true
    }

  export interface FlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flock'], meta: { name: 'Flock' } }
    /**
     * Find zero or one Flock that matches the filter.
     * @param {FlockFindUniqueArgs} args - Arguments to find a Flock
     * @example
     * // Get one Flock
     * const flock = await prisma.flock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlockFindUniqueArgs>(args: SelectSubset<T, FlockFindUniqueArgs<ExtArgs>>): Prisma__FlockClient<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlockFindUniqueOrThrowArgs} args - Arguments to find a Flock
     * @example
     * // Get one Flock
     * const flock = await prisma.flock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlockFindUniqueOrThrowArgs>(args: SelectSubset<T, FlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlockClient<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlockFindFirstArgs} args - Arguments to find a Flock
     * @example
     * // Get one Flock
     * const flock = await prisma.flock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlockFindFirstArgs>(args?: SelectSubset<T, FlockFindFirstArgs<ExtArgs>>): Prisma__FlockClient<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlockFindFirstOrThrowArgs} args - Arguments to find a Flock
     * @example
     * // Get one Flock
     * const flock = await prisma.flock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlockFindFirstOrThrowArgs>(args?: SelectSubset<T, FlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlockClient<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flocks
     * const flocks = await prisma.flock.findMany()
     * 
     * // Get first 10 Flocks
     * const flocks = await prisma.flock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flockWithIdOnly = await prisma.flock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlockFindManyArgs>(args?: SelectSubset<T, FlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flock.
     * @param {FlockCreateArgs} args - Arguments to create a Flock.
     * @example
     * // Create one Flock
     * const Flock = await prisma.flock.create({
     *   data: {
     *     // ... data to create a Flock
     *   }
     * })
     * 
     */
    create<T extends FlockCreateArgs>(args: SelectSubset<T, FlockCreateArgs<ExtArgs>>): Prisma__FlockClient<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flocks.
     * @param {FlockCreateManyArgs} args - Arguments to create many Flocks.
     * @example
     * // Create many Flocks
     * const flock = await prisma.flock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlockCreateManyArgs>(args?: SelectSubset<T, FlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flocks and returns the data saved in the database.
     * @param {FlockCreateManyAndReturnArgs} args - Arguments to create many Flocks.
     * @example
     * // Create many Flocks
     * const flock = await prisma.flock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flocks and only return the `id`
     * const flockWithIdOnly = await prisma.flock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlockCreateManyAndReturnArgs>(args?: SelectSubset<T, FlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flock.
     * @param {FlockDeleteArgs} args - Arguments to delete one Flock.
     * @example
     * // Delete one Flock
     * const Flock = await prisma.flock.delete({
     *   where: {
     *     // ... filter to delete one Flock
     *   }
     * })
     * 
     */
    delete<T extends FlockDeleteArgs>(args: SelectSubset<T, FlockDeleteArgs<ExtArgs>>): Prisma__FlockClient<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flock.
     * @param {FlockUpdateArgs} args - Arguments to update one Flock.
     * @example
     * // Update one Flock
     * const flock = await prisma.flock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlockUpdateArgs>(args: SelectSubset<T, FlockUpdateArgs<ExtArgs>>): Prisma__FlockClient<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flocks.
     * @param {FlockDeleteManyArgs} args - Arguments to filter Flocks to delete.
     * @example
     * // Delete a few Flocks
     * const { count } = await prisma.flock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlockDeleteManyArgs>(args?: SelectSubset<T, FlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flocks
     * const flock = await prisma.flock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlockUpdateManyArgs>(args: SelectSubset<T, FlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flocks and returns the data updated in the database.
     * @param {FlockUpdateManyAndReturnArgs} args - Arguments to update many Flocks.
     * @example
     * // Update many Flocks
     * const flock = await prisma.flock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flocks and only return the `id`
     * const flockWithIdOnly = await prisma.flock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlockUpdateManyAndReturnArgs>(args: SelectSubset<T, FlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flock.
     * @param {FlockUpsertArgs} args - Arguments to update or create a Flock.
     * @example
     * // Update or create a Flock
     * const flock = await prisma.flock.upsert({
     *   create: {
     *     // ... data to create a Flock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flock we want to update
     *   }
     * })
     */
    upsert<T extends FlockUpsertArgs>(args: SelectSubset<T, FlockUpsertArgs<ExtArgs>>): Prisma__FlockClient<$Result.GetResult<Prisma.$FlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlockCountArgs} args - Arguments to filter Flocks to count.
     * @example
     * // Count the number of Flocks
     * const count = await prisma.flock.count({
     *   where: {
     *     // ... the filter for the Flocks we want to count
     *   }
     * })
    **/
    count<T extends FlockCountArgs>(
      args?: Subset<T, FlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlockAggregateArgs>(args: Subset<T, FlockAggregateArgs>): Prisma.PrismaPromise<GetFlockAggregateType<T>>

    /**
     * Group by Flock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlockGroupByArgs['orderBy'] }
        : { orderBy?: FlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flock model
   */
  readonly fields: FlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flock model
   */
  interface FlockFieldRefs {
    readonly id: FieldRef<"Flock", 'String'>
    readonly flockNumber: FieldRef<"Flock", 'Int'>
    readonly flockStatus: FieldRef<"Flock", 'FlockStatus'>
    readonly startDate: FieldRef<"Flock", 'DateTime'>
    readonly endDate: FieldRef<"Flock", 'DateTime'>
    readonly executiveId: FieldRef<"Flock", 'String'>
    readonly farmCode: FieldRef<"Flock", 'String'>
    readonly docName: FieldRef<"Flock", 'String'>
    readonly docQuantity: FieldRef<"Flock", 'Int'>
    readonly approvedBy: FieldRef<"Flock", 'String'>
    readonly branchCode: FieldRef<"Flock", 'String'>
    readonly totalFeedKg: FieldRef<"Flock", 'Int'>
    readonly totalMedicine: FieldRef<"Flock", 'Int'>
    readonly fcr: FieldRef<"Flock", 'Float'>
    readonly totalSellBirds: FieldRef<"Flock", 'Int'>
    readonly mortality: FieldRef<"Flock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Flock findUnique
   */
  export type FlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    /**
     * Filter, which Flock to fetch.
     */
    where: FlockWhereUniqueInput
  }

  /**
   * Flock findUniqueOrThrow
   */
  export type FlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    /**
     * Filter, which Flock to fetch.
     */
    where: FlockWhereUniqueInput
  }

  /**
   * Flock findFirst
   */
  export type FlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    /**
     * Filter, which Flock to fetch.
     */
    where?: FlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flocks to fetch.
     */
    orderBy?: FlockOrderByWithRelationInput | FlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flocks.
     */
    cursor?: FlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flocks.
     */
    distinct?: FlockScalarFieldEnum | FlockScalarFieldEnum[]
  }

  /**
   * Flock findFirstOrThrow
   */
  export type FlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    /**
     * Filter, which Flock to fetch.
     */
    where?: FlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flocks to fetch.
     */
    orderBy?: FlockOrderByWithRelationInput | FlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flocks.
     */
    cursor?: FlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flocks.
     */
    distinct?: FlockScalarFieldEnum | FlockScalarFieldEnum[]
  }

  /**
   * Flock findMany
   */
  export type FlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    /**
     * Filter, which Flocks to fetch.
     */
    where?: FlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flocks to fetch.
     */
    orderBy?: FlockOrderByWithRelationInput | FlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flocks.
     */
    cursor?: FlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flocks.
     */
    skip?: number
    distinct?: FlockScalarFieldEnum | FlockScalarFieldEnum[]
  }

  /**
   * Flock create
   */
  export type FlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    /**
     * The data needed to create a Flock.
     */
    data: XOR<FlockCreateInput, FlockUncheckedCreateInput>
  }

  /**
   * Flock createMany
   */
  export type FlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flocks.
     */
    data: FlockCreateManyInput | FlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flock createManyAndReturn
   */
  export type FlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * The data used to create many Flocks.
     */
    data: FlockCreateManyInput | FlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flock update
   */
  export type FlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    /**
     * The data needed to update a Flock.
     */
    data: XOR<FlockUpdateInput, FlockUncheckedUpdateInput>
    /**
     * Choose, which Flock to update.
     */
    where: FlockWhereUniqueInput
  }

  /**
   * Flock updateMany
   */
  export type FlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flocks.
     */
    data: XOR<FlockUpdateManyMutationInput, FlockUncheckedUpdateManyInput>
    /**
     * Filter which Flocks to update
     */
    where?: FlockWhereInput
    /**
     * Limit how many Flocks to update.
     */
    limit?: number
  }

  /**
   * Flock updateManyAndReturn
   */
  export type FlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * The data used to update Flocks.
     */
    data: XOR<FlockUpdateManyMutationInput, FlockUncheckedUpdateManyInput>
    /**
     * Filter which Flocks to update
     */
    where?: FlockWhereInput
    /**
     * Limit how many Flocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flock upsert
   */
  export type FlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    /**
     * The filter to search for the Flock to update in case it exists.
     */
    where: FlockWhereUniqueInput
    /**
     * In case the Flock found by the `where` argument doesn't exist, create a new Flock with this data.
     */
    create: XOR<FlockCreateInput, FlockUncheckedCreateInput>
    /**
     * In case the Flock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlockUpdateInput, FlockUncheckedUpdateInput>
  }

  /**
   * Flock delete
   */
  export type FlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
    /**
     * Filter which Flock to delete.
     */
    where: FlockWhereUniqueInput
  }

  /**
   * Flock deleteMany
   */
  export type FlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flocks to delete
     */
    where?: FlockWhereInput
    /**
     * Limit how many Flocks to delete.
     */
    limit?: number
  }

  /**
   * Flock without action
   */
  export type FlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flock
     */
    select?: FlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flock
     */
    omit?: FlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlockInclude<ExtArgs> | null
  }


  /**
   * Model FeedNameCategory
   */

  export type AggregateFeedNameCategory = {
    _count: FeedNameCategoryCountAggregateOutputType | null
    _avg: FeedNameCategoryAvgAggregateOutputType | null
    _sum: FeedNameCategorySumAggregateOutputType | null
    _min: FeedNameCategoryMinAggregateOutputType | null
    _max: FeedNameCategoryMaxAggregateOutputType | null
  }

  export type FeedNameCategoryAvgAggregateOutputType = {
    feedCodeNumber: number | null
  }

  export type FeedNameCategorySumAggregateOutputType = {
    feedCodeNumber: number | null
  }

  export type FeedNameCategoryMinAggregateOutputType = {
    id: string | null
    feedName: string | null
    feedCodeNumber: number | null
  }

  export type FeedNameCategoryMaxAggregateOutputType = {
    id: string | null
    feedName: string | null
    feedCodeNumber: number | null
  }

  export type FeedNameCategoryCountAggregateOutputType = {
    id: number
    feedName: number
    feedCodeNumber: number
    _all: number
  }


  export type FeedNameCategoryAvgAggregateInputType = {
    feedCodeNumber?: true
  }

  export type FeedNameCategorySumAggregateInputType = {
    feedCodeNumber?: true
  }

  export type FeedNameCategoryMinAggregateInputType = {
    id?: true
    feedName?: true
    feedCodeNumber?: true
  }

  export type FeedNameCategoryMaxAggregateInputType = {
    id?: true
    feedName?: true
    feedCodeNumber?: true
  }

  export type FeedNameCategoryCountAggregateInputType = {
    id?: true
    feedName?: true
    feedCodeNumber?: true
    _all?: true
  }

  export type FeedNameCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedNameCategory to aggregate.
     */
    where?: FeedNameCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedNameCategories to fetch.
     */
    orderBy?: FeedNameCategoryOrderByWithRelationInput | FeedNameCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedNameCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedNameCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedNameCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedNameCategories
    **/
    _count?: true | FeedNameCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedNameCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedNameCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedNameCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedNameCategoryMaxAggregateInputType
  }

  export type GetFeedNameCategoryAggregateType<T extends FeedNameCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedNameCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedNameCategory[P]>
      : GetScalarType<T[P], AggregateFeedNameCategory[P]>
  }




  export type FeedNameCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedNameCategoryWhereInput
    orderBy?: FeedNameCategoryOrderByWithAggregationInput | FeedNameCategoryOrderByWithAggregationInput[]
    by: FeedNameCategoryScalarFieldEnum[] | FeedNameCategoryScalarFieldEnum
    having?: FeedNameCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedNameCategoryCountAggregateInputType | true
    _avg?: FeedNameCategoryAvgAggregateInputType
    _sum?: FeedNameCategorySumAggregateInputType
    _min?: FeedNameCategoryMinAggregateInputType
    _max?: FeedNameCategoryMaxAggregateInputType
  }

  export type FeedNameCategoryGroupByOutputType = {
    id: string
    feedName: string
    feedCodeNumber: number
    _count: FeedNameCategoryCountAggregateOutputType | null
    _avg: FeedNameCategoryAvgAggregateOutputType | null
    _sum: FeedNameCategorySumAggregateOutputType | null
    _min: FeedNameCategoryMinAggregateOutputType | null
    _max: FeedNameCategoryMaxAggregateOutputType | null
  }

  type GetFeedNameCategoryGroupByPayload<T extends FeedNameCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedNameCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedNameCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedNameCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FeedNameCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FeedNameCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feedName?: boolean
    feedCodeNumber?: boolean
    feeds?: boolean | FeedNameCategory$feedsArgs<ExtArgs>
    _count?: boolean | FeedNameCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedNameCategory"]>

  export type FeedNameCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feedName?: boolean
    feedCodeNumber?: boolean
  }, ExtArgs["result"]["feedNameCategory"]>

  export type FeedNameCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feedName?: boolean
    feedCodeNumber?: boolean
  }, ExtArgs["result"]["feedNameCategory"]>

  export type FeedNameCategorySelectScalar = {
    id?: boolean
    feedName?: boolean
    feedCodeNumber?: boolean
  }

  export type FeedNameCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "feedName" | "feedCodeNumber", ExtArgs["result"]["feedNameCategory"]>
  export type FeedNameCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feeds?: boolean | FeedNameCategory$feedsArgs<ExtArgs>
    _count?: boolean | FeedNameCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeedNameCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FeedNameCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FeedNameCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedNameCategory"
    objects: {
      feeds: Prisma.$FeedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      feedName: string
      feedCodeNumber: number
    }, ExtArgs["result"]["feedNameCategory"]>
    composites: {}
  }

  type FeedNameCategoryGetPayload<S extends boolean | null | undefined | FeedNameCategoryDefaultArgs> = $Result.GetResult<Prisma.$FeedNameCategoryPayload, S>

  type FeedNameCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedNameCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedNameCategoryCountAggregateInputType | true
    }

  export interface FeedNameCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedNameCategory'], meta: { name: 'FeedNameCategory' } }
    /**
     * Find zero or one FeedNameCategory that matches the filter.
     * @param {FeedNameCategoryFindUniqueArgs} args - Arguments to find a FeedNameCategory
     * @example
     * // Get one FeedNameCategory
     * const feedNameCategory = await prisma.feedNameCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedNameCategoryFindUniqueArgs>(args: SelectSubset<T, FeedNameCategoryFindUniqueArgs<ExtArgs>>): Prisma__FeedNameCategoryClient<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeedNameCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedNameCategoryFindUniqueOrThrowArgs} args - Arguments to find a FeedNameCategory
     * @example
     * // Get one FeedNameCategory
     * const feedNameCategory = await prisma.feedNameCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedNameCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedNameCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedNameCategoryClient<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedNameCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedNameCategoryFindFirstArgs} args - Arguments to find a FeedNameCategory
     * @example
     * // Get one FeedNameCategory
     * const feedNameCategory = await prisma.feedNameCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedNameCategoryFindFirstArgs>(args?: SelectSubset<T, FeedNameCategoryFindFirstArgs<ExtArgs>>): Prisma__FeedNameCategoryClient<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedNameCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedNameCategoryFindFirstOrThrowArgs} args - Arguments to find a FeedNameCategory
     * @example
     * // Get one FeedNameCategory
     * const feedNameCategory = await prisma.feedNameCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedNameCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedNameCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedNameCategoryClient<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedNameCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedNameCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedNameCategories
     * const feedNameCategories = await prisma.feedNameCategory.findMany()
     * 
     * // Get first 10 FeedNameCategories
     * const feedNameCategories = await prisma.feedNameCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedNameCategoryWithIdOnly = await prisma.feedNameCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedNameCategoryFindManyArgs>(args?: SelectSubset<T, FeedNameCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeedNameCategory.
     * @param {FeedNameCategoryCreateArgs} args - Arguments to create a FeedNameCategory.
     * @example
     * // Create one FeedNameCategory
     * const FeedNameCategory = await prisma.feedNameCategory.create({
     *   data: {
     *     // ... data to create a FeedNameCategory
     *   }
     * })
     * 
     */
    create<T extends FeedNameCategoryCreateArgs>(args: SelectSubset<T, FeedNameCategoryCreateArgs<ExtArgs>>): Prisma__FeedNameCategoryClient<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeedNameCategories.
     * @param {FeedNameCategoryCreateManyArgs} args - Arguments to create many FeedNameCategories.
     * @example
     * // Create many FeedNameCategories
     * const feedNameCategory = await prisma.feedNameCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedNameCategoryCreateManyArgs>(args?: SelectSubset<T, FeedNameCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeedNameCategories and returns the data saved in the database.
     * @param {FeedNameCategoryCreateManyAndReturnArgs} args - Arguments to create many FeedNameCategories.
     * @example
     * // Create many FeedNameCategories
     * const feedNameCategory = await prisma.feedNameCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeedNameCategories and only return the `id`
     * const feedNameCategoryWithIdOnly = await prisma.feedNameCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedNameCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedNameCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeedNameCategory.
     * @param {FeedNameCategoryDeleteArgs} args - Arguments to delete one FeedNameCategory.
     * @example
     * // Delete one FeedNameCategory
     * const FeedNameCategory = await prisma.feedNameCategory.delete({
     *   where: {
     *     // ... filter to delete one FeedNameCategory
     *   }
     * })
     * 
     */
    delete<T extends FeedNameCategoryDeleteArgs>(args: SelectSubset<T, FeedNameCategoryDeleteArgs<ExtArgs>>): Prisma__FeedNameCategoryClient<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeedNameCategory.
     * @param {FeedNameCategoryUpdateArgs} args - Arguments to update one FeedNameCategory.
     * @example
     * // Update one FeedNameCategory
     * const feedNameCategory = await prisma.feedNameCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedNameCategoryUpdateArgs>(args: SelectSubset<T, FeedNameCategoryUpdateArgs<ExtArgs>>): Prisma__FeedNameCategoryClient<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeedNameCategories.
     * @param {FeedNameCategoryDeleteManyArgs} args - Arguments to filter FeedNameCategories to delete.
     * @example
     * // Delete a few FeedNameCategories
     * const { count } = await prisma.feedNameCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedNameCategoryDeleteManyArgs>(args?: SelectSubset<T, FeedNameCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedNameCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedNameCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedNameCategories
     * const feedNameCategory = await prisma.feedNameCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedNameCategoryUpdateManyArgs>(args: SelectSubset<T, FeedNameCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedNameCategories and returns the data updated in the database.
     * @param {FeedNameCategoryUpdateManyAndReturnArgs} args - Arguments to update many FeedNameCategories.
     * @example
     * // Update many FeedNameCategories
     * const feedNameCategory = await prisma.feedNameCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeedNameCategories and only return the `id`
     * const feedNameCategoryWithIdOnly = await prisma.feedNameCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedNameCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedNameCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeedNameCategory.
     * @param {FeedNameCategoryUpsertArgs} args - Arguments to update or create a FeedNameCategory.
     * @example
     * // Update or create a FeedNameCategory
     * const feedNameCategory = await prisma.feedNameCategory.upsert({
     *   create: {
     *     // ... data to create a FeedNameCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedNameCategory we want to update
     *   }
     * })
     */
    upsert<T extends FeedNameCategoryUpsertArgs>(args: SelectSubset<T, FeedNameCategoryUpsertArgs<ExtArgs>>): Prisma__FeedNameCategoryClient<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeedNameCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedNameCategoryCountArgs} args - Arguments to filter FeedNameCategories to count.
     * @example
     * // Count the number of FeedNameCategories
     * const count = await prisma.feedNameCategory.count({
     *   where: {
     *     // ... the filter for the FeedNameCategories we want to count
     *   }
     * })
    **/
    count<T extends FeedNameCategoryCountArgs>(
      args?: Subset<T, FeedNameCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedNameCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedNameCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedNameCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedNameCategoryAggregateArgs>(args: Subset<T, FeedNameCategoryAggregateArgs>): Prisma.PrismaPromise<GetFeedNameCategoryAggregateType<T>>

    /**
     * Group by FeedNameCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedNameCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedNameCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedNameCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FeedNameCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedNameCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedNameCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedNameCategory model
   */
  readonly fields: FeedNameCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedNameCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedNameCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feeds<T extends FeedNameCategory$feedsArgs<ExtArgs> = {}>(args?: Subset<T, FeedNameCategory$feedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeedNameCategory model
   */
  interface FeedNameCategoryFieldRefs {
    readonly id: FieldRef<"FeedNameCategory", 'String'>
    readonly feedName: FieldRef<"FeedNameCategory", 'String'>
    readonly feedCodeNumber: FieldRef<"FeedNameCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FeedNameCategory findUnique
   */
  export type FeedNameCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedNameCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeedNameCategory to fetch.
     */
    where: FeedNameCategoryWhereUniqueInput
  }

  /**
   * FeedNameCategory findUniqueOrThrow
   */
  export type FeedNameCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedNameCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeedNameCategory to fetch.
     */
    where: FeedNameCategoryWhereUniqueInput
  }

  /**
   * FeedNameCategory findFirst
   */
  export type FeedNameCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedNameCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeedNameCategory to fetch.
     */
    where?: FeedNameCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedNameCategories to fetch.
     */
    orderBy?: FeedNameCategoryOrderByWithRelationInput | FeedNameCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedNameCategories.
     */
    cursor?: FeedNameCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedNameCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedNameCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedNameCategories.
     */
    distinct?: FeedNameCategoryScalarFieldEnum | FeedNameCategoryScalarFieldEnum[]
  }

  /**
   * FeedNameCategory findFirstOrThrow
   */
  export type FeedNameCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedNameCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeedNameCategory to fetch.
     */
    where?: FeedNameCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedNameCategories to fetch.
     */
    orderBy?: FeedNameCategoryOrderByWithRelationInput | FeedNameCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedNameCategories.
     */
    cursor?: FeedNameCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedNameCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedNameCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedNameCategories.
     */
    distinct?: FeedNameCategoryScalarFieldEnum | FeedNameCategoryScalarFieldEnum[]
  }

  /**
   * FeedNameCategory findMany
   */
  export type FeedNameCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedNameCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FeedNameCategories to fetch.
     */
    where?: FeedNameCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedNameCategories to fetch.
     */
    orderBy?: FeedNameCategoryOrderByWithRelationInput | FeedNameCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedNameCategories.
     */
    cursor?: FeedNameCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedNameCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedNameCategories.
     */
    skip?: number
    distinct?: FeedNameCategoryScalarFieldEnum | FeedNameCategoryScalarFieldEnum[]
  }

  /**
   * FeedNameCategory create
   */
  export type FeedNameCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedNameCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedNameCategory.
     */
    data: XOR<FeedNameCategoryCreateInput, FeedNameCategoryUncheckedCreateInput>
  }

  /**
   * FeedNameCategory createMany
   */
  export type FeedNameCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedNameCategories.
     */
    data: FeedNameCategoryCreateManyInput | FeedNameCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeedNameCategory createManyAndReturn
   */
  export type FeedNameCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many FeedNameCategories.
     */
    data: FeedNameCategoryCreateManyInput | FeedNameCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeedNameCategory update
   */
  export type FeedNameCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedNameCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedNameCategory.
     */
    data: XOR<FeedNameCategoryUpdateInput, FeedNameCategoryUncheckedUpdateInput>
    /**
     * Choose, which FeedNameCategory to update.
     */
    where: FeedNameCategoryWhereUniqueInput
  }

  /**
   * FeedNameCategory updateMany
   */
  export type FeedNameCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedNameCategories.
     */
    data: XOR<FeedNameCategoryUpdateManyMutationInput, FeedNameCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FeedNameCategories to update
     */
    where?: FeedNameCategoryWhereInput
    /**
     * Limit how many FeedNameCategories to update.
     */
    limit?: number
  }

  /**
   * FeedNameCategory updateManyAndReturn
   */
  export type FeedNameCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * The data used to update FeedNameCategories.
     */
    data: XOR<FeedNameCategoryUpdateManyMutationInput, FeedNameCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FeedNameCategories to update
     */
    where?: FeedNameCategoryWhereInput
    /**
     * Limit how many FeedNameCategories to update.
     */
    limit?: number
  }

  /**
   * FeedNameCategory upsert
   */
  export type FeedNameCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedNameCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedNameCategory to update in case it exists.
     */
    where: FeedNameCategoryWhereUniqueInput
    /**
     * In case the FeedNameCategory found by the `where` argument doesn't exist, create a new FeedNameCategory with this data.
     */
    create: XOR<FeedNameCategoryCreateInput, FeedNameCategoryUncheckedCreateInput>
    /**
     * In case the FeedNameCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedNameCategoryUpdateInput, FeedNameCategoryUncheckedUpdateInput>
  }

  /**
   * FeedNameCategory delete
   */
  export type FeedNameCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedNameCategoryInclude<ExtArgs> | null
    /**
     * Filter which FeedNameCategory to delete.
     */
    where: FeedNameCategoryWhereUniqueInput
  }

  /**
   * FeedNameCategory deleteMany
   */
  export type FeedNameCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedNameCategories to delete
     */
    where?: FeedNameCategoryWhereInput
    /**
     * Limit how many FeedNameCategories to delete.
     */
    limit?: number
  }

  /**
   * FeedNameCategory.feeds
   */
  export type FeedNameCategory$feedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    where?: FeedWhereInput
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[]
    cursor?: FeedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[]
  }

  /**
   * FeedNameCategory without action
   */
  export type FeedNameCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedNameCategory
     */
    select?: FeedNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedNameCategory
     */
    omit?: FeedNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedNameCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Feed
   */

  export type AggregateFeed = {
    _count: FeedCountAggregateOutputType | null
    _avg: FeedAvgAggregateOutputType | null
    _sum: FeedSumAggregateOutputType | null
    _min: FeedMinAggregateOutputType | null
    _max: FeedMaxAggregateOutputType | null
  }

  export type FeedAvgAggregateOutputType = {
    stock: number | null
  }

  export type FeedSumAggregateOutputType = {
    stock: number | null
  }

  export type FeedMinAggregateOutputType = {
    id: string | null
    feedName: string | null
    stock: number | null
    branchCode: string | null
  }

  export type FeedMaxAggregateOutputType = {
    id: string | null
    feedName: string | null
    stock: number | null
    branchCode: string | null
  }

  export type FeedCountAggregateOutputType = {
    id: number
    feedName: number
    stock: number
    branchCode: number
    _all: number
  }


  export type FeedAvgAggregateInputType = {
    stock?: true
  }

  export type FeedSumAggregateInputType = {
    stock?: true
  }

  export type FeedMinAggregateInputType = {
    id?: true
    feedName?: true
    stock?: true
    branchCode?: true
  }

  export type FeedMaxAggregateInputType = {
    id?: true
    feedName?: true
    stock?: true
    branchCode?: true
  }

  export type FeedCountAggregateInputType = {
    id?: true
    feedName?: true
    stock?: true
    branchCode?: true
    _all?: true
  }

  export type FeedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feed to aggregate.
     */
    where?: FeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feeds
    **/
    _count?: true | FeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedMaxAggregateInputType
  }

  export type GetFeedAggregateType<T extends FeedAggregateArgs> = {
        [P in keyof T & keyof AggregateFeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeed[P]>
      : GetScalarType<T[P], AggregateFeed[P]>
  }




  export type FeedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedWhereInput
    orderBy?: FeedOrderByWithAggregationInput | FeedOrderByWithAggregationInput[]
    by: FeedScalarFieldEnum[] | FeedScalarFieldEnum
    having?: FeedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedCountAggregateInputType | true
    _avg?: FeedAvgAggregateInputType
    _sum?: FeedSumAggregateInputType
    _min?: FeedMinAggregateInputType
    _max?: FeedMaxAggregateInputType
  }

  export type FeedGroupByOutputType = {
    id: string
    feedName: string
    stock: number
    branchCode: string | null
    _count: FeedCountAggregateOutputType | null
    _avg: FeedAvgAggregateOutputType | null
    _sum: FeedSumAggregateOutputType | null
    _min: FeedMinAggregateOutputType | null
    _max: FeedMaxAggregateOutputType | null
  }

  type GetFeedGroupByPayload<T extends FeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedGroupByOutputType[P]>
            : GetScalarType<T[P], FeedGroupByOutputType[P]>
        }
      >
    >


  export type FeedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feedName?: boolean
    stock?: boolean
    branchCode?: boolean
    feedNameCategory?: boolean | FeedNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | Feed$branchArgs<ExtArgs>
  }, ExtArgs["result"]["feed"]>

  export type FeedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feedName?: boolean
    stock?: boolean
    branchCode?: boolean
    feedNameCategory?: boolean | FeedNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | Feed$branchArgs<ExtArgs>
  }, ExtArgs["result"]["feed"]>

  export type FeedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feedName?: boolean
    stock?: boolean
    branchCode?: boolean
    feedNameCategory?: boolean | FeedNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | Feed$branchArgs<ExtArgs>
  }, ExtArgs["result"]["feed"]>

  export type FeedSelectScalar = {
    id?: boolean
    feedName?: boolean
    stock?: boolean
    branchCode?: boolean
  }

  export type FeedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "feedName" | "stock" | "branchCode", ExtArgs["result"]["feed"]>
  export type FeedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedNameCategory?: boolean | FeedNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | Feed$branchArgs<ExtArgs>
  }
  export type FeedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedNameCategory?: boolean | FeedNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | Feed$branchArgs<ExtArgs>
  }
  export type FeedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedNameCategory?: boolean | FeedNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | Feed$branchArgs<ExtArgs>
  }

  export type $FeedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feed"
    objects: {
      feedNameCategory: Prisma.$FeedNameCategoryPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      feedName: string
      stock: number
      branchCode: string | null
    }, ExtArgs["result"]["feed"]>
    composites: {}
  }

  type FeedGetPayload<S extends boolean | null | undefined | FeedDefaultArgs> = $Result.GetResult<Prisma.$FeedPayload, S>

  type FeedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedCountAggregateInputType | true
    }

  export interface FeedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feed'], meta: { name: 'Feed' } }
    /**
     * Find zero or one Feed that matches the filter.
     * @param {FeedFindUniqueArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedFindUniqueArgs>(args: SelectSubset<T, FeedFindUniqueArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedFindUniqueOrThrowArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedFindFirstArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedFindFirstArgs>(args?: SelectSubset<T, FeedFindFirstArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedFindFirstOrThrowArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feeds
     * const feeds = await prisma.feed.findMany()
     * 
     * // Get first 10 Feeds
     * const feeds = await prisma.feed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedWithIdOnly = await prisma.feed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedFindManyArgs>(args?: SelectSubset<T, FeedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feed.
     * @param {FeedCreateArgs} args - Arguments to create a Feed.
     * @example
     * // Create one Feed
     * const Feed = await prisma.feed.create({
     *   data: {
     *     // ... data to create a Feed
     *   }
     * })
     * 
     */
    create<T extends FeedCreateArgs>(args: SelectSubset<T, FeedCreateArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feeds.
     * @param {FeedCreateManyArgs} args - Arguments to create many Feeds.
     * @example
     * // Create many Feeds
     * const feed = await prisma.feed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedCreateManyArgs>(args?: SelectSubset<T, FeedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feeds and returns the data saved in the database.
     * @param {FeedCreateManyAndReturnArgs} args - Arguments to create many Feeds.
     * @example
     * // Create many Feeds
     * const feed = await prisma.feed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feeds and only return the `id`
     * const feedWithIdOnly = await prisma.feed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feed.
     * @param {FeedDeleteArgs} args - Arguments to delete one Feed.
     * @example
     * // Delete one Feed
     * const Feed = await prisma.feed.delete({
     *   where: {
     *     // ... filter to delete one Feed
     *   }
     * })
     * 
     */
    delete<T extends FeedDeleteArgs>(args: SelectSubset<T, FeedDeleteArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feed.
     * @param {FeedUpdateArgs} args - Arguments to update one Feed.
     * @example
     * // Update one Feed
     * const feed = await prisma.feed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedUpdateArgs>(args: SelectSubset<T, FeedUpdateArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feeds.
     * @param {FeedDeleteManyArgs} args - Arguments to filter Feeds to delete.
     * @example
     * // Delete a few Feeds
     * const { count } = await prisma.feed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedDeleteManyArgs>(args?: SelectSubset<T, FeedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feeds
     * const feed = await prisma.feed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedUpdateManyArgs>(args: SelectSubset<T, FeedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feeds and returns the data updated in the database.
     * @param {FeedUpdateManyAndReturnArgs} args - Arguments to update many Feeds.
     * @example
     * // Update many Feeds
     * const feed = await prisma.feed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feeds and only return the `id`
     * const feedWithIdOnly = await prisma.feed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feed.
     * @param {FeedUpsertArgs} args - Arguments to update or create a Feed.
     * @example
     * // Update or create a Feed
     * const feed = await prisma.feed.upsert({
     *   create: {
     *     // ... data to create a Feed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feed we want to update
     *   }
     * })
     */
    upsert<T extends FeedUpsertArgs>(args: SelectSubset<T, FeedUpsertArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCountArgs} args - Arguments to filter Feeds to count.
     * @example
     * // Count the number of Feeds
     * const count = await prisma.feed.count({
     *   where: {
     *     // ... the filter for the Feeds we want to count
     *   }
     * })
    **/
    count<T extends FeedCountArgs>(
      args?: Subset<T, FeedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedAggregateArgs>(args: Subset<T, FeedAggregateArgs>): Prisma.PrismaPromise<GetFeedAggregateType<T>>

    /**
     * Group by Feed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedGroupByArgs['orderBy'] }
        : { orderBy?: FeedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feed model
   */
  readonly fields: FeedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedNameCategory<T extends FeedNameCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeedNameCategoryDefaultArgs<ExtArgs>>): Prisma__FeedNameCategoryClient<$Result.GetResult<Prisma.$FeedNameCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends Feed$branchArgs<ExtArgs> = {}>(args?: Subset<T, Feed$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feed model
   */
  interface FeedFieldRefs {
    readonly id: FieldRef<"Feed", 'String'>
    readonly feedName: FieldRef<"Feed", 'String'>
    readonly stock: FieldRef<"Feed", 'Int'>
    readonly branchCode: FieldRef<"Feed", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feed findUnique
   */
  export type FeedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where: FeedWhereUniqueInput
  }

  /**
   * Feed findUniqueOrThrow
   */
  export type FeedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where: FeedWhereUniqueInput
  }

  /**
   * Feed findFirst
   */
  export type FeedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where?: FeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feeds.
     */
    cursor?: FeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feeds.
     */
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[]
  }

  /**
   * Feed findFirstOrThrow
   */
  export type FeedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where?: FeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feeds.
     */
    cursor?: FeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feeds.
     */
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[]
  }

  /**
   * Feed findMany
   */
  export type FeedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feeds to fetch.
     */
    where?: FeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feeds.
     */
    cursor?: FeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[]
  }

  /**
   * Feed create
   */
  export type FeedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * The data needed to create a Feed.
     */
    data: XOR<FeedCreateInput, FeedUncheckedCreateInput>
  }

  /**
   * Feed createMany
   */
  export type FeedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feeds.
     */
    data: FeedCreateManyInput | FeedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feed createManyAndReturn
   */
  export type FeedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * The data used to create many Feeds.
     */
    data: FeedCreateManyInput | FeedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feed update
   */
  export type FeedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * The data needed to update a Feed.
     */
    data: XOR<FeedUpdateInput, FeedUncheckedUpdateInput>
    /**
     * Choose, which Feed to update.
     */
    where: FeedWhereUniqueInput
  }

  /**
   * Feed updateMany
   */
  export type FeedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feeds.
     */
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyInput>
    /**
     * Filter which Feeds to update
     */
    where?: FeedWhereInput
    /**
     * Limit how many Feeds to update.
     */
    limit?: number
  }

  /**
   * Feed updateManyAndReturn
   */
  export type FeedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * The data used to update Feeds.
     */
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyInput>
    /**
     * Filter which Feeds to update
     */
    where?: FeedWhereInput
    /**
     * Limit how many Feeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feed upsert
   */
  export type FeedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * The filter to search for the Feed to update in case it exists.
     */
    where: FeedWhereUniqueInput
    /**
     * In case the Feed found by the `where` argument doesn't exist, create a new Feed with this data.
     */
    create: XOR<FeedCreateInput, FeedUncheckedCreateInput>
    /**
     * In case the Feed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedUpdateInput, FeedUncheckedUpdateInput>
  }

  /**
   * Feed delete
   */
  export type FeedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter which Feed to delete.
     */
    where: FeedWhereUniqueInput
  }

  /**
   * Feed deleteMany
   */
  export type FeedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feeds to delete
     */
    where?: FeedWhereInput
    /**
     * Limit how many Feeds to delete.
     */
    limit?: number
  }

  /**
   * Feed.branch
   */
  export type Feed$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Feed without action
   */
  export type FeedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
  }


  /**
   * Model MedicineNameCategory
   */

  export type AggregateMedicineNameCategory = {
    _count: MedicineNameCategoryCountAggregateOutputType | null
    _min: MedicineNameCategoryMinAggregateOutputType | null
    _max: MedicineNameCategoryMaxAggregateOutputType | null
  }

  export type MedicineNameCategoryMinAggregateOutputType = {
    id: string | null
    genericName: string | null
  }

  export type MedicineNameCategoryMaxAggregateOutputType = {
    id: string | null
    genericName: string | null
  }

  export type MedicineNameCategoryCountAggregateOutputType = {
    id: number
    genericName: number
    _all: number
  }


  export type MedicineNameCategoryMinAggregateInputType = {
    id?: true
    genericName?: true
  }

  export type MedicineNameCategoryMaxAggregateInputType = {
    id?: true
    genericName?: true
  }

  export type MedicineNameCategoryCountAggregateInputType = {
    id?: true
    genericName?: true
    _all?: true
  }

  export type MedicineNameCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineNameCategory to aggregate.
     */
    where?: MedicineNameCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineNameCategories to fetch.
     */
    orderBy?: MedicineNameCategoryOrderByWithRelationInput | MedicineNameCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineNameCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineNameCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineNameCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicineNameCategories
    **/
    _count?: true | MedicineNameCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineNameCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineNameCategoryMaxAggregateInputType
  }

  export type GetMedicineNameCategoryAggregateType<T extends MedicineNameCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicineNameCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicineNameCategory[P]>
      : GetScalarType<T[P], AggregateMedicineNameCategory[P]>
  }




  export type MedicineNameCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineNameCategoryWhereInput
    orderBy?: MedicineNameCategoryOrderByWithAggregationInput | MedicineNameCategoryOrderByWithAggregationInput[]
    by: MedicineNameCategoryScalarFieldEnum[] | MedicineNameCategoryScalarFieldEnum
    having?: MedicineNameCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineNameCategoryCountAggregateInputType | true
    _min?: MedicineNameCategoryMinAggregateInputType
    _max?: MedicineNameCategoryMaxAggregateInputType
  }

  export type MedicineNameCategoryGroupByOutputType = {
    id: string
    genericName: string
    _count: MedicineNameCategoryCountAggregateOutputType | null
    _min: MedicineNameCategoryMinAggregateOutputType | null
    _max: MedicineNameCategoryMaxAggregateOutputType | null
  }

  type GetMedicineNameCategoryGroupByPayload<T extends MedicineNameCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineNameCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineNameCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineNameCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineNameCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MedicineNameCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    medicineNameAdd?: boolean | MedicineNameCategory$medicineNameAddArgs<ExtArgs>
    MedicineStock?: boolean | MedicineNameCategory$MedicineStockArgs<ExtArgs>
    MedicinePurchess?: boolean | MedicineNameCategory$MedicinePurchessArgs<ExtArgs>
    _count?: boolean | MedicineNameCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineNameCategory"]>

  export type MedicineNameCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
  }, ExtArgs["result"]["medicineNameCategory"]>

  export type MedicineNameCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
  }, ExtArgs["result"]["medicineNameCategory"]>

  export type MedicineNameCategorySelectScalar = {
    id?: boolean
    genericName?: boolean
  }

  export type MedicineNameCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "genericName", ExtArgs["result"]["medicineNameCategory"]>
  export type MedicineNameCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineNameAdd?: boolean | MedicineNameCategory$medicineNameAddArgs<ExtArgs>
    MedicineStock?: boolean | MedicineNameCategory$MedicineStockArgs<ExtArgs>
    MedicinePurchess?: boolean | MedicineNameCategory$MedicinePurchessArgs<ExtArgs>
    _count?: boolean | MedicineNameCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineNameCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicineNameCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicineNameCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicineNameCategory"
    objects: {
      medicineNameAdd: Prisma.$MedicineNameAddPayload<ExtArgs>[]
      MedicineStock: Prisma.$MedicineStockPayload<ExtArgs>[]
      MedicinePurchess: Prisma.$MedicinePurchessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      genericName: string
    }, ExtArgs["result"]["medicineNameCategory"]>
    composites: {}
  }

  type MedicineNameCategoryGetPayload<S extends boolean | null | undefined | MedicineNameCategoryDefaultArgs> = $Result.GetResult<Prisma.$MedicineNameCategoryPayload, S>

  type MedicineNameCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineNameCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineNameCategoryCountAggregateInputType | true
    }

  export interface MedicineNameCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicineNameCategory'], meta: { name: 'MedicineNameCategory' } }
    /**
     * Find zero or one MedicineNameCategory that matches the filter.
     * @param {MedicineNameCategoryFindUniqueArgs} args - Arguments to find a MedicineNameCategory
     * @example
     * // Get one MedicineNameCategory
     * const medicineNameCategory = await prisma.medicineNameCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineNameCategoryFindUniqueArgs>(args: SelectSubset<T, MedicineNameCategoryFindUniqueArgs<ExtArgs>>): Prisma__MedicineNameCategoryClient<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicineNameCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineNameCategoryFindUniqueOrThrowArgs} args - Arguments to find a MedicineNameCategory
     * @example
     * // Get one MedicineNameCategory
     * const medicineNameCategory = await prisma.medicineNameCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineNameCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineNameCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineNameCategoryClient<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicineNameCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameCategoryFindFirstArgs} args - Arguments to find a MedicineNameCategory
     * @example
     * // Get one MedicineNameCategory
     * const medicineNameCategory = await prisma.medicineNameCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineNameCategoryFindFirstArgs>(args?: SelectSubset<T, MedicineNameCategoryFindFirstArgs<ExtArgs>>): Prisma__MedicineNameCategoryClient<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicineNameCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameCategoryFindFirstOrThrowArgs} args - Arguments to find a MedicineNameCategory
     * @example
     * // Get one MedicineNameCategory
     * const medicineNameCategory = await prisma.medicineNameCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineNameCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineNameCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineNameCategoryClient<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicineNameCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicineNameCategories
     * const medicineNameCategories = await prisma.medicineNameCategory.findMany()
     * 
     * // Get first 10 MedicineNameCategories
     * const medicineNameCategories = await prisma.medicineNameCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineNameCategoryWithIdOnly = await prisma.medicineNameCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineNameCategoryFindManyArgs>(args?: SelectSubset<T, MedicineNameCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicineNameCategory.
     * @param {MedicineNameCategoryCreateArgs} args - Arguments to create a MedicineNameCategory.
     * @example
     * // Create one MedicineNameCategory
     * const MedicineNameCategory = await prisma.medicineNameCategory.create({
     *   data: {
     *     // ... data to create a MedicineNameCategory
     *   }
     * })
     * 
     */
    create<T extends MedicineNameCategoryCreateArgs>(args: SelectSubset<T, MedicineNameCategoryCreateArgs<ExtArgs>>): Prisma__MedicineNameCategoryClient<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicineNameCategories.
     * @param {MedicineNameCategoryCreateManyArgs} args - Arguments to create many MedicineNameCategories.
     * @example
     * // Create many MedicineNameCategories
     * const medicineNameCategory = await prisma.medicineNameCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineNameCategoryCreateManyArgs>(args?: SelectSubset<T, MedicineNameCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicineNameCategories and returns the data saved in the database.
     * @param {MedicineNameCategoryCreateManyAndReturnArgs} args - Arguments to create many MedicineNameCategories.
     * @example
     * // Create many MedicineNameCategories
     * const medicineNameCategory = await prisma.medicineNameCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicineNameCategories and only return the `id`
     * const medicineNameCategoryWithIdOnly = await prisma.medicineNameCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineNameCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineNameCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicineNameCategory.
     * @param {MedicineNameCategoryDeleteArgs} args - Arguments to delete one MedicineNameCategory.
     * @example
     * // Delete one MedicineNameCategory
     * const MedicineNameCategory = await prisma.medicineNameCategory.delete({
     *   where: {
     *     // ... filter to delete one MedicineNameCategory
     *   }
     * })
     * 
     */
    delete<T extends MedicineNameCategoryDeleteArgs>(args: SelectSubset<T, MedicineNameCategoryDeleteArgs<ExtArgs>>): Prisma__MedicineNameCategoryClient<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicineNameCategory.
     * @param {MedicineNameCategoryUpdateArgs} args - Arguments to update one MedicineNameCategory.
     * @example
     * // Update one MedicineNameCategory
     * const medicineNameCategory = await prisma.medicineNameCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineNameCategoryUpdateArgs>(args: SelectSubset<T, MedicineNameCategoryUpdateArgs<ExtArgs>>): Prisma__MedicineNameCategoryClient<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicineNameCategories.
     * @param {MedicineNameCategoryDeleteManyArgs} args - Arguments to filter MedicineNameCategories to delete.
     * @example
     * // Delete a few MedicineNameCategories
     * const { count } = await prisma.medicineNameCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineNameCategoryDeleteManyArgs>(args?: SelectSubset<T, MedicineNameCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicineNameCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicineNameCategories
     * const medicineNameCategory = await prisma.medicineNameCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineNameCategoryUpdateManyArgs>(args: SelectSubset<T, MedicineNameCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicineNameCategories and returns the data updated in the database.
     * @param {MedicineNameCategoryUpdateManyAndReturnArgs} args - Arguments to update many MedicineNameCategories.
     * @example
     * // Update many MedicineNameCategories
     * const medicineNameCategory = await prisma.medicineNameCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicineNameCategories and only return the `id`
     * const medicineNameCategoryWithIdOnly = await prisma.medicineNameCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicineNameCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicineNameCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicineNameCategory.
     * @param {MedicineNameCategoryUpsertArgs} args - Arguments to update or create a MedicineNameCategory.
     * @example
     * // Update or create a MedicineNameCategory
     * const medicineNameCategory = await prisma.medicineNameCategory.upsert({
     *   create: {
     *     // ... data to create a MedicineNameCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicineNameCategory we want to update
     *   }
     * })
     */
    upsert<T extends MedicineNameCategoryUpsertArgs>(args: SelectSubset<T, MedicineNameCategoryUpsertArgs<ExtArgs>>): Prisma__MedicineNameCategoryClient<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicineNameCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameCategoryCountArgs} args - Arguments to filter MedicineNameCategories to count.
     * @example
     * // Count the number of MedicineNameCategories
     * const count = await prisma.medicineNameCategory.count({
     *   where: {
     *     // ... the filter for the MedicineNameCategories we want to count
     *   }
     * })
    **/
    count<T extends MedicineNameCategoryCountArgs>(
      args?: Subset<T, MedicineNameCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineNameCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicineNameCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineNameCategoryAggregateArgs>(args: Subset<T, MedicineNameCategoryAggregateArgs>): Prisma.PrismaPromise<GetMedicineNameCategoryAggregateType<T>>

    /**
     * Group by MedicineNameCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineNameCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineNameCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MedicineNameCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineNameCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineNameCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicineNameCategory model
   */
  readonly fields: MedicineNameCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicineNameCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineNameCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicineNameAdd<T extends MedicineNameCategory$medicineNameAddArgs<ExtArgs> = {}>(args?: Subset<T, MedicineNameCategory$medicineNameAddArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MedicineStock<T extends MedicineNameCategory$MedicineStockArgs<ExtArgs> = {}>(args?: Subset<T, MedicineNameCategory$MedicineStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MedicinePurchess<T extends MedicineNameCategory$MedicinePurchessArgs<ExtArgs> = {}>(args?: Subset<T, MedicineNameCategory$MedicinePurchessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicineNameCategory model
   */
  interface MedicineNameCategoryFieldRefs {
    readonly id: FieldRef<"MedicineNameCategory", 'String'>
    readonly genericName: FieldRef<"MedicineNameCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MedicineNameCategory findUnique
   */
  export type MedicineNameCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicineNameCategory to fetch.
     */
    where: MedicineNameCategoryWhereUniqueInput
  }

  /**
   * MedicineNameCategory findUniqueOrThrow
   */
  export type MedicineNameCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicineNameCategory to fetch.
     */
    where: MedicineNameCategoryWhereUniqueInput
  }

  /**
   * MedicineNameCategory findFirst
   */
  export type MedicineNameCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicineNameCategory to fetch.
     */
    where?: MedicineNameCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineNameCategories to fetch.
     */
    orderBy?: MedicineNameCategoryOrderByWithRelationInput | MedicineNameCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineNameCategories.
     */
    cursor?: MedicineNameCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineNameCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineNameCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineNameCategories.
     */
    distinct?: MedicineNameCategoryScalarFieldEnum | MedicineNameCategoryScalarFieldEnum[]
  }

  /**
   * MedicineNameCategory findFirstOrThrow
   */
  export type MedicineNameCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicineNameCategory to fetch.
     */
    where?: MedicineNameCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineNameCategories to fetch.
     */
    orderBy?: MedicineNameCategoryOrderByWithRelationInput | MedicineNameCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineNameCategories.
     */
    cursor?: MedicineNameCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineNameCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineNameCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineNameCategories.
     */
    distinct?: MedicineNameCategoryScalarFieldEnum | MedicineNameCategoryScalarFieldEnum[]
  }

  /**
   * MedicineNameCategory findMany
   */
  export type MedicineNameCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MedicineNameCategories to fetch.
     */
    where?: MedicineNameCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineNameCategories to fetch.
     */
    orderBy?: MedicineNameCategoryOrderByWithRelationInput | MedicineNameCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicineNameCategories.
     */
    cursor?: MedicineNameCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineNameCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineNameCategories.
     */
    skip?: number
    distinct?: MedicineNameCategoryScalarFieldEnum | MedicineNameCategoryScalarFieldEnum[]
  }

  /**
   * MedicineNameCategory create
   */
  export type MedicineNameCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicineNameCategory.
     */
    data: XOR<MedicineNameCategoryCreateInput, MedicineNameCategoryUncheckedCreateInput>
  }

  /**
   * MedicineNameCategory createMany
   */
  export type MedicineNameCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicineNameCategories.
     */
    data: MedicineNameCategoryCreateManyInput | MedicineNameCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicineNameCategory createManyAndReturn
   */
  export type MedicineNameCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many MedicineNameCategories.
     */
    data: MedicineNameCategoryCreateManyInput | MedicineNameCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicineNameCategory update
   */
  export type MedicineNameCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicineNameCategory.
     */
    data: XOR<MedicineNameCategoryUpdateInput, MedicineNameCategoryUncheckedUpdateInput>
    /**
     * Choose, which MedicineNameCategory to update.
     */
    where: MedicineNameCategoryWhereUniqueInput
  }

  /**
   * MedicineNameCategory updateMany
   */
  export type MedicineNameCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicineNameCategories.
     */
    data: XOR<MedicineNameCategoryUpdateManyMutationInput, MedicineNameCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicineNameCategories to update
     */
    where?: MedicineNameCategoryWhereInput
    /**
     * Limit how many MedicineNameCategories to update.
     */
    limit?: number
  }

  /**
   * MedicineNameCategory updateManyAndReturn
   */
  export type MedicineNameCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * The data used to update MedicineNameCategories.
     */
    data: XOR<MedicineNameCategoryUpdateManyMutationInput, MedicineNameCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MedicineNameCategories to update
     */
    where?: MedicineNameCategoryWhereInput
    /**
     * Limit how many MedicineNameCategories to update.
     */
    limit?: number
  }

  /**
   * MedicineNameCategory upsert
   */
  export type MedicineNameCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicineNameCategory to update in case it exists.
     */
    where: MedicineNameCategoryWhereUniqueInput
    /**
     * In case the MedicineNameCategory found by the `where` argument doesn't exist, create a new MedicineNameCategory with this data.
     */
    create: XOR<MedicineNameCategoryCreateInput, MedicineNameCategoryUncheckedCreateInput>
    /**
     * In case the MedicineNameCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineNameCategoryUpdateInput, MedicineNameCategoryUncheckedUpdateInput>
  }

  /**
   * MedicineNameCategory delete
   */
  export type MedicineNameCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameCategoryInclude<ExtArgs> | null
    /**
     * Filter which MedicineNameCategory to delete.
     */
    where: MedicineNameCategoryWhereUniqueInput
  }

  /**
   * MedicineNameCategory deleteMany
   */
  export type MedicineNameCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineNameCategories to delete
     */
    where?: MedicineNameCategoryWhereInput
    /**
     * Limit how many MedicineNameCategories to delete.
     */
    limit?: number
  }

  /**
   * MedicineNameCategory.medicineNameAdd
   */
  export type MedicineNameCategory$medicineNameAddArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddInclude<ExtArgs> | null
    where?: MedicineNameAddWhereInput
    orderBy?: MedicineNameAddOrderByWithRelationInput | MedicineNameAddOrderByWithRelationInput[]
    cursor?: MedicineNameAddWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineNameAddScalarFieldEnum | MedicineNameAddScalarFieldEnum[]
  }

  /**
   * MedicineNameCategory.MedicineStock
   */
  export type MedicineNameCategory$MedicineStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    where?: MedicineStockWhereInput
    orderBy?: MedicineStockOrderByWithRelationInput | MedicineStockOrderByWithRelationInput[]
    cursor?: MedicineStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineStockScalarFieldEnum | MedicineStockScalarFieldEnum[]
  }

  /**
   * MedicineNameCategory.MedicinePurchess
   */
  export type MedicineNameCategory$MedicinePurchessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    where?: MedicinePurchessWhereInput
    orderBy?: MedicinePurchessOrderByWithRelationInput | MedicinePurchessOrderByWithRelationInput[]
    cursor?: MedicinePurchessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicinePurchessScalarFieldEnum | MedicinePurchessScalarFieldEnum[]
  }

  /**
   * MedicineNameCategory without action
   */
  export type MedicineNameCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameCategory
     */
    select?: MedicineNameCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameCategory
     */
    omit?: MedicineNameCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameCategoryInclude<ExtArgs> | null
  }


  /**
   * Model MedicineNameAdd
   */

  export type AggregateMedicineNameAdd = {
    _count: MedicineNameAddCountAggregateOutputType | null
    _min: MedicineNameAddMinAggregateOutputType | null
    _max: MedicineNameAddMaxAggregateOutputType | null
  }

  export type MedicineNameAddMinAggregateOutputType = {
    id: string | null
    name: string | null
    conpany: string | null
    genericName: string | null
  }

  export type MedicineNameAddMaxAggregateOutputType = {
    id: string | null
    name: string | null
    conpany: string | null
    genericName: string | null
  }

  export type MedicineNameAddCountAggregateOutputType = {
    id: number
    name: number
    conpany: number
    genericName: number
    _all: number
  }


  export type MedicineNameAddMinAggregateInputType = {
    id?: true
    name?: true
    conpany?: true
    genericName?: true
  }

  export type MedicineNameAddMaxAggregateInputType = {
    id?: true
    name?: true
    conpany?: true
    genericName?: true
  }

  export type MedicineNameAddCountAggregateInputType = {
    id?: true
    name?: true
    conpany?: true
    genericName?: true
    _all?: true
  }

  export type MedicineNameAddAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineNameAdd to aggregate.
     */
    where?: MedicineNameAddWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineNameAdds to fetch.
     */
    orderBy?: MedicineNameAddOrderByWithRelationInput | MedicineNameAddOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineNameAddWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineNameAdds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineNameAdds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicineNameAdds
    **/
    _count?: true | MedicineNameAddCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineNameAddMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineNameAddMaxAggregateInputType
  }

  export type GetMedicineNameAddAggregateType<T extends MedicineNameAddAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicineNameAdd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicineNameAdd[P]>
      : GetScalarType<T[P], AggregateMedicineNameAdd[P]>
  }




  export type MedicineNameAddGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineNameAddWhereInput
    orderBy?: MedicineNameAddOrderByWithAggregationInput | MedicineNameAddOrderByWithAggregationInput[]
    by: MedicineNameAddScalarFieldEnum[] | MedicineNameAddScalarFieldEnum
    having?: MedicineNameAddScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineNameAddCountAggregateInputType | true
    _min?: MedicineNameAddMinAggregateInputType
    _max?: MedicineNameAddMaxAggregateInputType
  }

  export type MedicineNameAddGroupByOutputType = {
    id: string
    name: string
    conpany: string
    genericName: string
    _count: MedicineNameAddCountAggregateOutputType | null
    _min: MedicineNameAddMinAggregateOutputType | null
    _max: MedicineNameAddMaxAggregateOutputType | null
  }

  type GetMedicineNameAddGroupByPayload<T extends MedicineNameAddGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineNameAddGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineNameAddGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineNameAddGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineNameAddGroupByOutputType[P]>
        }
      >
    >


  export type MedicineNameAddSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    conpany?: boolean
    genericName?: boolean
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    MedicineStock?: boolean | MedicineNameAdd$MedicineStockArgs<ExtArgs>
    MedicinePurchess?: boolean | MedicineNameAdd$MedicinePurchessArgs<ExtArgs>
    _count?: boolean | MedicineNameAddCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineNameAdd"]>

  export type MedicineNameAddSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    conpany?: boolean
    genericName?: boolean
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineNameAdd"]>

  export type MedicineNameAddSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    conpany?: boolean
    genericName?: boolean
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineNameAdd"]>

  export type MedicineNameAddSelectScalar = {
    id?: boolean
    name?: boolean
    conpany?: boolean
    genericName?: boolean
  }

  export type MedicineNameAddOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "conpany" | "genericName", ExtArgs["result"]["medicineNameAdd"]>
  export type MedicineNameAddInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    MedicineStock?: boolean | MedicineNameAdd$MedicineStockArgs<ExtArgs>
    MedicinePurchess?: boolean | MedicineNameAdd$MedicinePurchessArgs<ExtArgs>
    _count?: boolean | MedicineNameAddCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineNameAddIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
  }
  export type MedicineNameAddIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
  }

  export type $MedicineNameAddPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicineNameAdd"
    objects: {
      medicineCategory: Prisma.$MedicineNameCategoryPayload<ExtArgs>
      MedicineStock: Prisma.$MedicineStockPayload<ExtArgs>[]
      MedicinePurchess: Prisma.$MedicinePurchessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      conpany: string
      genericName: string
    }, ExtArgs["result"]["medicineNameAdd"]>
    composites: {}
  }

  type MedicineNameAddGetPayload<S extends boolean | null | undefined | MedicineNameAddDefaultArgs> = $Result.GetResult<Prisma.$MedicineNameAddPayload, S>

  type MedicineNameAddCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineNameAddFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineNameAddCountAggregateInputType | true
    }

  export interface MedicineNameAddDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicineNameAdd'], meta: { name: 'MedicineNameAdd' } }
    /**
     * Find zero or one MedicineNameAdd that matches the filter.
     * @param {MedicineNameAddFindUniqueArgs} args - Arguments to find a MedicineNameAdd
     * @example
     * // Get one MedicineNameAdd
     * const medicineNameAdd = await prisma.medicineNameAdd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineNameAddFindUniqueArgs>(args: SelectSubset<T, MedicineNameAddFindUniqueArgs<ExtArgs>>): Prisma__MedicineNameAddClient<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicineNameAdd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineNameAddFindUniqueOrThrowArgs} args - Arguments to find a MedicineNameAdd
     * @example
     * // Get one MedicineNameAdd
     * const medicineNameAdd = await prisma.medicineNameAdd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineNameAddFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineNameAddFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineNameAddClient<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicineNameAdd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameAddFindFirstArgs} args - Arguments to find a MedicineNameAdd
     * @example
     * // Get one MedicineNameAdd
     * const medicineNameAdd = await prisma.medicineNameAdd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineNameAddFindFirstArgs>(args?: SelectSubset<T, MedicineNameAddFindFirstArgs<ExtArgs>>): Prisma__MedicineNameAddClient<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicineNameAdd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameAddFindFirstOrThrowArgs} args - Arguments to find a MedicineNameAdd
     * @example
     * // Get one MedicineNameAdd
     * const medicineNameAdd = await prisma.medicineNameAdd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineNameAddFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineNameAddFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineNameAddClient<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicineNameAdds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameAddFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicineNameAdds
     * const medicineNameAdds = await prisma.medicineNameAdd.findMany()
     * 
     * // Get first 10 MedicineNameAdds
     * const medicineNameAdds = await prisma.medicineNameAdd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineNameAddWithIdOnly = await prisma.medicineNameAdd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineNameAddFindManyArgs>(args?: SelectSubset<T, MedicineNameAddFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicineNameAdd.
     * @param {MedicineNameAddCreateArgs} args - Arguments to create a MedicineNameAdd.
     * @example
     * // Create one MedicineNameAdd
     * const MedicineNameAdd = await prisma.medicineNameAdd.create({
     *   data: {
     *     // ... data to create a MedicineNameAdd
     *   }
     * })
     * 
     */
    create<T extends MedicineNameAddCreateArgs>(args: SelectSubset<T, MedicineNameAddCreateArgs<ExtArgs>>): Prisma__MedicineNameAddClient<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicineNameAdds.
     * @param {MedicineNameAddCreateManyArgs} args - Arguments to create many MedicineNameAdds.
     * @example
     * // Create many MedicineNameAdds
     * const medicineNameAdd = await prisma.medicineNameAdd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineNameAddCreateManyArgs>(args?: SelectSubset<T, MedicineNameAddCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicineNameAdds and returns the data saved in the database.
     * @param {MedicineNameAddCreateManyAndReturnArgs} args - Arguments to create many MedicineNameAdds.
     * @example
     * // Create many MedicineNameAdds
     * const medicineNameAdd = await prisma.medicineNameAdd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicineNameAdds and only return the `id`
     * const medicineNameAddWithIdOnly = await prisma.medicineNameAdd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineNameAddCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineNameAddCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicineNameAdd.
     * @param {MedicineNameAddDeleteArgs} args - Arguments to delete one MedicineNameAdd.
     * @example
     * // Delete one MedicineNameAdd
     * const MedicineNameAdd = await prisma.medicineNameAdd.delete({
     *   where: {
     *     // ... filter to delete one MedicineNameAdd
     *   }
     * })
     * 
     */
    delete<T extends MedicineNameAddDeleteArgs>(args: SelectSubset<T, MedicineNameAddDeleteArgs<ExtArgs>>): Prisma__MedicineNameAddClient<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicineNameAdd.
     * @param {MedicineNameAddUpdateArgs} args - Arguments to update one MedicineNameAdd.
     * @example
     * // Update one MedicineNameAdd
     * const medicineNameAdd = await prisma.medicineNameAdd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineNameAddUpdateArgs>(args: SelectSubset<T, MedicineNameAddUpdateArgs<ExtArgs>>): Prisma__MedicineNameAddClient<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicineNameAdds.
     * @param {MedicineNameAddDeleteManyArgs} args - Arguments to filter MedicineNameAdds to delete.
     * @example
     * // Delete a few MedicineNameAdds
     * const { count } = await prisma.medicineNameAdd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineNameAddDeleteManyArgs>(args?: SelectSubset<T, MedicineNameAddDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicineNameAdds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameAddUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicineNameAdds
     * const medicineNameAdd = await prisma.medicineNameAdd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineNameAddUpdateManyArgs>(args: SelectSubset<T, MedicineNameAddUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicineNameAdds and returns the data updated in the database.
     * @param {MedicineNameAddUpdateManyAndReturnArgs} args - Arguments to update many MedicineNameAdds.
     * @example
     * // Update many MedicineNameAdds
     * const medicineNameAdd = await prisma.medicineNameAdd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicineNameAdds and only return the `id`
     * const medicineNameAddWithIdOnly = await prisma.medicineNameAdd.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicineNameAddUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicineNameAddUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicineNameAdd.
     * @param {MedicineNameAddUpsertArgs} args - Arguments to update or create a MedicineNameAdd.
     * @example
     * // Update or create a MedicineNameAdd
     * const medicineNameAdd = await prisma.medicineNameAdd.upsert({
     *   create: {
     *     // ... data to create a MedicineNameAdd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicineNameAdd we want to update
     *   }
     * })
     */
    upsert<T extends MedicineNameAddUpsertArgs>(args: SelectSubset<T, MedicineNameAddUpsertArgs<ExtArgs>>): Prisma__MedicineNameAddClient<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicineNameAdds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameAddCountArgs} args - Arguments to filter MedicineNameAdds to count.
     * @example
     * // Count the number of MedicineNameAdds
     * const count = await prisma.medicineNameAdd.count({
     *   where: {
     *     // ... the filter for the MedicineNameAdds we want to count
     *   }
     * })
    **/
    count<T extends MedicineNameAddCountArgs>(
      args?: Subset<T, MedicineNameAddCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineNameAddCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicineNameAdd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameAddAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineNameAddAggregateArgs>(args: Subset<T, MedicineNameAddAggregateArgs>): Prisma.PrismaPromise<GetMedicineNameAddAggregateType<T>>

    /**
     * Group by MedicineNameAdd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineNameAddGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineNameAddGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineNameAddGroupByArgs['orderBy'] }
        : { orderBy?: MedicineNameAddGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineNameAddGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineNameAddGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicineNameAdd model
   */
  readonly fields: MedicineNameAddFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicineNameAdd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineNameAddClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicineCategory<T extends MedicineNameCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineNameCategoryDefaultArgs<ExtArgs>>): Prisma__MedicineNameCategoryClient<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MedicineStock<T extends MedicineNameAdd$MedicineStockArgs<ExtArgs> = {}>(args?: Subset<T, MedicineNameAdd$MedicineStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MedicinePurchess<T extends MedicineNameAdd$MedicinePurchessArgs<ExtArgs> = {}>(args?: Subset<T, MedicineNameAdd$MedicinePurchessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicineNameAdd model
   */
  interface MedicineNameAddFieldRefs {
    readonly id: FieldRef<"MedicineNameAdd", 'String'>
    readonly name: FieldRef<"MedicineNameAdd", 'String'>
    readonly conpany: FieldRef<"MedicineNameAdd", 'String'>
    readonly genericName: FieldRef<"MedicineNameAdd", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MedicineNameAdd findUnique
   */
  export type MedicineNameAddFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddInclude<ExtArgs> | null
    /**
     * Filter, which MedicineNameAdd to fetch.
     */
    where: MedicineNameAddWhereUniqueInput
  }

  /**
   * MedicineNameAdd findUniqueOrThrow
   */
  export type MedicineNameAddFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddInclude<ExtArgs> | null
    /**
     * Filter, which MedicineNameAdd to fetch.
     */
    where: MedicineNameAddWhereUniqueInput
  }

  /**
   * MedicineNameAdd findFirst
   */
  export type MedicineNameAddFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddInclude<ExtArgs> | null
    /**
     * Filter, which MedicineNameAdd to fetch.
     */
    where?: MedicineNameAddWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineNameAdds to fetch.
     */
    orderBy?: MedicineNameAddOrderByWithRelationInput | MedicineNameAddOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineNameAdds.
     */
    cursor?: MedicineNameAddWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineNameAdds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineNameAdds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineNameAdds.
     */
    distinct?: MedicineNameAddScalarFieldEnum | MedicineNameAddScalarFieldEnum[]
  }

  /**
   * MedicineNameAdd findFirstOrThrow
   */
  export type MedicineNameAddFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddInclude<ExtArgs> | null
    /**
     * Filter, which MedicineNameAdd to fetch.
     */
    where?: MedicineNameAddWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineNameAdds to fetch.
     */
    orderBy?: MedicineNameAddOrderByWithRelationInput | MedicineNameAddOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineNameAdds.
     */
    cursor?: MedicineNameAddWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineNameAdds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineNameAdds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineNameAdds.
     */
    distinct?: MedicineNameAddScalarFieldEnum | MedicineNameAddScalarFieldEnum[]
  }

  /**
   * MedicineNameAdd findMany
   */
  export type MedicineNameAddFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddInclude<ExtArgs> | null
    /**
     * Filter, which MedicineNameAdds to fetch.
     */
    where?: MedicineNameAddWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineNameAdds to fetch.
     */
    orderBy?: MedicineNameAddOrderByWithRelationInput | MedicineNameAddOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicineNameAdds.
     */
    cursor?: MedicineNameAddWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineNameAdds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineNameAdds.
     */
    skip?: number
    distinct?: MedicineNameAddScalarFieldEnum | MedicineNameAddScalarFieldEnum[]
  }

  /**
   * MedicineNameAdd create
   */
  export type MedicineNameAddCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicineNameAdd.
     */
    data: XOR<MedicineNameAddCreateInput, MedicineNameAddUncheckedCreateInput>
  }

  /**
   * MedicineNameAdd createMany
   */
  export type MedicineNameAddCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicineNameAdds.
     */
    data: MedicineNameAddCreateManyInput | MedicineNameAddCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicineNameAdd createManyAndReturn
   */
  export type MedicineNameAddCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * The data used to create many MedicineNameAdds.
     */
    data: MedicineNameAddCreateManyInput | MedicineNameAddCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicineNameAdd update
   */
  export type MedicineNameAddUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicineNameAdd.
     */
    data: XOR<MedicineNameAddUpdateInput, MedicineNameAddUncheckedUpdateInput>
    /**
     * Choose, which MedicineNameAdd to update.
     */
    where: MedicineNameAddWhereUniqueInput
  }

  /**
   * MedicineNameAdd updateMany
   */
  export type MedicineNameAddUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicineNameAdds.
     */
    data: XOR<MedicineNameAddUpdateManyMutationInput, MedicineNameAddUncheckedUpdateManyInput>
    /**
     * Filter which MedicineNameAdds to update
     */
    where?: MedicineNameAddWhereInput
    /**
     * Limit how many MedicineNameAdds to update.
     */
    limit?: number
  }

  /**
   * MedicineNameAdd updateManyAndReturn
   */
  export type MedicineNameAddUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * The data used to update MedicineNameAdds.
     */
    data: XOR<MedicineNameAddUpdateManyMutationInput, MedicineNameAddUncheckedUpdateManyInput>
    /**
     * Filter which MedicineNameAdds to update
     */
    where?: MedicineNameAddWhereInput
    /**
     * Limit how many MedicineNameAdds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicineNameAdd upsert
   */
  export type MedicineNameAddUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicineNameAdd to update in case it exists.
     */
    where: MedicineNameAddWhereUniqueInput
    /**
     * In case the MedicineNameAdd found by the `where` argument doesn't exist, create a new MedicineNameAdd with this data.
     */
    create: XOR<MedicineNameAddCreateInput, MedicineNameAddUncheckedCreateInput>
    /**
     * In case the MedicineNameAdd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineNameAddUpdateInput, MedicineNameAddUncheckedUpdateInput>
  }

  /**
   * MedicineNameAdd delete
   */
  export type MedicineNameAddDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddInclude<ExtArgs> | null
    /**
     * Filter which MedicineNameAdd to delete.
     */
    where: MedicineNameAddWhereUniqueInput
  }

  /**
   * MedicineNameAdd deleteMany
   */
  export type MedicineNameAddDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineNameAdds to delete
     */
    where?: MedicineNameAddWhereInput
    /**
     * Limit how many MedicineNameAdds to delete.
     */
    limit?: number
  }

  /**
   * MedicineNameAdd.MedicineStock
   */
  export type MedicineNameAdd$MedicineStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    where?: MedicineStockWhereInput
    orderBy?: MedicineStockOrderByWithRelationInput | MedicineStockOrderByWithRelationInput[]
    cursor?: MedicineStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineStockScalarFieldEnum | MedicineStockScalarFieldEnum[]
  }

  /**
   * MedicineNameAdd.MedicinePurchess
   */
  export type MedicineNameAdd$MedicinePurchessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    where?: MedicinePurchessWhereInput
    orderBy?: MedicinePurchessOrderByWithRelationInput | MedicinePurchessOrderByWithRelationInput[]
    cursor?: MedicinePurchessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicinePurchessScalarFieldEnum | MedicinePurchessScalarFieldEnum[]
  }

  /**
   * MedicineNameAdd without action
   */
  export type MedicineNameAddDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineNameAdd
     */
    select?: MedicineNameAddSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineNameAdd
     */
    omit?: MedicineNameAddOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineNameAddInclude<ExtArgs> | null
  }


  /**
   * Model MedicinePurchess
   */

  export type AggregateMedicinePurchess = {
    _count: MedicinePurchessCountAggregateOutputType | null
    _avg: MedicinePurchessAvgAggregateOutputType | null
    _sum: MedicinePurchessSumAggregateOutputType | null
    _min: MedicinePurchessMinAggregateOutputType | null
    _max: MedicinePurchessMaxAggregateOutputType | null
  }

  export type MedicinePurchessAvgAggregateOutputType = {
    purchaseUnitPrice: number | null
    sellUnitPrice: number | null
    purchaseQuantity: number | null
    bonusQuantity: number | null
    purchaseTotalPrice: number | null
  }

  export type MedicinePurchessSumAggregateOutputType = {
    purchaseUnitPrice: number | null
    sellUnitPrice: number | null
    purchaseQuantity: number | null
    bonusQuantity: number | null
    purchaseTotalPrice: number | null
  }

  export type MedicinePurchessMinAggregateOutputType = {
    id: string | null
    genericName: string | null
    name: string | null
    purchaseUnitPrice: number | null
    sellUnitPrice: number | null
    purchaseQuantity: number | null
    mfgDate: string | null
    expDate: string | null
    bonusQuantity: number | null
    purchaseTotalPrice: number | null
    supplierInfo: string | null
    branchCode: string | null
  }

  export type MedicinePurchessMaxAggregateOutputType = {
    id: string | null
    genericName: string | null
    name: string | null
    purchaseUnitPrice: number | null
    sellUnitPrice: number | null
    purchaseQuantity: number | null
    mfgDate: string | null
    expDate: string | null
    bonusQuantity: number | null
    purchaseTotalPrice: number | null
    supplierInfo: string | null
    branchCode: string | null
  }

  export type MedicinePurchessCountAggregateOutputType = {
    id: number
    genericName: number
    name: number
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: number
    expDate: number
    bonusQuantity: number
    purchaseTotalPrice: number
    supplierInfo: number
    branchCode: number
    _all: number
  }


  export type MedicinePurchessAvgAggregateInputType = {
    purchaseUnitPrice?: true
    sellUnitPrice?: true
    purchaseQuantity?: true
    bonusQuantity?: true
    purchaseTotalPrice?: true
  }

  export type MedicinePurchessSumAggregateInputType = {
    purchaseUnitPrice?: true
    sellUnitPrice?: true
    purchaseQuantity?: true
    bonusQuantity?: true
    purchaseTotalPrice?: true
  }

  export type MedicinePurchessMinAggregateInputType = {
    id?: true
    genericName?: true
    name?: true
    purchaseUnitPrice?: true
    sellUnitPrice?: true
    purchaseQuantity?: true
    mfgDate?: true
    expDate?: true
    bonusQuantity?: true
    purchaseTotalPrice?: true
    supplierInfo?: true
    branchCode?: true
  }

  export type MedicinePurchessMaxAggregateInputType = {
    id?: true
    genericName?: true
    name?: true
    purchaseUnitPrice?: true
    sellUnitPrice?: true
    purchaseQuantity?: true
    mfgDate?: true
    expDate?: true
    bonusQuantity?: true
    purchaseTotalPrice?: true
    supplierInfo?: true
    branchCode?: true
  }

  export type MedicinePurchessCountAggregateInputType = {
    id?: true
    genericName?: true
    name?: true
    purchaseUnitPrice?: true
    sellUnitPrice?: true
    purchaseQuantity?: true
    mfgDate?: true
    expDate?: true
    bonusQuantity?: true
    purchaseTotalPrice?: true
    supplierInfo?: true
    branchCode?: true
    _all?: true
  }

  export type MedicinePurchessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicinePurchess to aggregate.
     */
    where?: MedicinePurchessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinePurchesses to fetch.
     */
    orderBy?: MedicinePurchessOrderByWithRelationInput | MedicinePurchessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicinePurchessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinePurchesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinePurchesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicinePurchesses
    **/
    _count?: true | MedicinePurchessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicinePurchessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicinePurchessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicinePurchessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicinePurchessMaxAggregateInputType
  }

  export type GetMedicinePurchessAggregateType<T extends MedicinePurchessAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicinePurchess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicinePurchess[P]>
      : GetScalarType<T[P], AggregateMedicinePurchess[P]>
  }




  export type MedicinePurchessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicinePurchessWhereInput
    orderBy?: MedicinePurchessOrderByWithAggregationInput | MedicinePurchessOrderByWithAggregationInput[]
    by: MedicinePurchessScalarFieldEnum[] | MedicinePurchessScalarFieldEnum
    having?: MedicinePurchessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicinePurchessCountAggregateInputType | true
    _avg?: MedicinePurchessAvgAggregateInputType
    _sum?: MedicinePurchessSumAggregateInputType
    _min?: MedicinePurchessMinAggregateInputType
    _max?: MedicinePurchessMaxAggregateInputType
  }

  export type MedicinePurchessGroupByOutputType = {
    id: string
    genericName: string
    name: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity: number | null
    purchaseTotalPrice: number
    supplierInfo: string
    branchCode: string
    _count: MedicinePurchessCountAggregateOutputType | null
    _avg: MedicinePurchessAvgAggregateOutputType | null
    _sum: MedicinePurchessSumAggregateOutputType | null
    _min: MedicinePurchessMinAggregateOutputType | null
    _max: MedicinePurchessMaxAggregateOutputType | null
  }

  type GetMedicinePurchessGroupByPayload<T extends MedicinePurchessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicinePurchessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicinePurchessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicinePurchessGroupByOutputType[P]>
            : GetScalarType<T[P], MedicinePurchessGroupByOutputType[P]>
        }
      >
    >


  export type MedicinePurchessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    name?: boolean
    purchaseUnitPrice?: boolean
    sellUnitPrice?: boolean
    purchaseQuantity?: boolean
    mfgDate?: boolean
    expDate?: boolean
    bonusQuantity?: boolean
    purchaseTotalPrice?: boolean
    supplierInfo?: boolean
    branchCode?: boolean
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicinePurchess"]>

  export type MedicinePurchessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    name?: boolean
    purchaseUnitPrice?: boolean
    sellUnitPrice?: boolean
    purchaseQuantity?: boolean
    mfgDate?: boolean
    expDate?: boolean
    bonusQuantity?: boolean
    purchaseTotalPrice?: boolean
    supplierInfo?: boolean
    branchCode?: boolean
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicinePurchess"]>

  export type MedicinePurchessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    name?: boolean
    purchaseUnitPrice?: boolean
    sellUnitPrice?: boolean
    purchaseQuantity?: boolean
    mfgDate?: boolean
    expDate?: boolean
    bonusQuantity?: boolean
    purchaseTotalPrice?: boolean
    supplierInfo?: boolean
    branchCode?: boolean
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicinePurchess"]>

  export type MedicinePurchessSelectScalar = {
    id?: boolean
    genericName?: boolean
    name?: boolean
    purchaseUnitPrice?: boolean
    sellUnitPrice?: boolean
    purchaseQuantity?: boolean
    mfgDate?: boolean
    expDate?: boolean
    bonusQuantity?: boolean
    purchaseTotalPrice?: boolean
    supplierInfo?: boolean
    branchCode?: boolean
  }

  export type MedicinePurchessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "genericName" | "name" | "purchaseUnitPrice" | "sellUnitPrice" | "purchaseQuantity" | "mfgDate" | "expDate" | "bonusQuantity" | "purchaseTotalPrice" | "supplierInfo" | "branchCode", ExtArgs["result"]["medicinePurchess"]>
  export type MedicinePurchessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type MedicinePurchessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type MedicinePurchessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $MedicinePurchessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicinePurchess"
    objects: {
      medicineCategory: Prisma.$MedicineNameCategoryPayload<ExtArgs>
      medicineNameAdd: Prisma.$MedicineNameAddPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      genericName: string
      name: string
      purchaseUnitPrice: number
      sellUnitPrice: number
      purchaseQuantity: number
      mfgDate: string
      expDate: string
      bonusQuantity: number | null
      purchaseTotalPrice: number
      supplierInfo: string
      branchCode: string
    }, ExtArgs["result"]["medicinePurchess"]>
    composites: {}
  }

  type MedicinePurchessGetPayload<S extends boolean | null | undefined | MedicinePurchessDefaultArgs> = $Result.GetResult<Prisma.$MedicinePurchessPayload, S>

  type MedicinePurchessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicinePurchessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicinePurchessCountAggregateInputType | true
    }

  export interface MedicinePurchessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicinePurchess'], meta: { name: 'MedicinePurchess' } }
    /**
     * Find zero or one MedicinePurchess that matches the filter.
     * @param {MedicinePurchessFindUniqueArgs} args - Arguments to find a MedicinePurchess
     * @example
     * // Get one MedicinePurchess
     * const medicinePurchess = await prisma.medicinePurchess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicinePurchessFindUniqueArgs>(args: SelectSubset<T, MedicinePurchessFindUniqueArgs<ExtArgs>>): Prisma__MedicinePurchessClient<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicinePurchess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicinePurchessFindUniqueOrThrowArgs} args - Arguments to find a MedicinePurchess
     * @example
     * // Get one MedicinePurchess
     * const medicinePurchess = await prisma.medicinePurchess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicinePurchessFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicinePurchessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicinePurchessClient<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicinePurchess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePurchessFindFirstArgs} args - Arguments to find a MedicinePurchess
     * @example
     * // Get one MedicinePurchess
     * const medicinePurchess = await prisma.medicinePurchess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicinePurchessFindFirstArgs>(args?: SelectSubset<T, MedicinePurchessFindFirstArgs<ExtArgs>>): Prisma__MedicinePurchessClient<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicinePurchess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePurchessFindFirstOrThrowArgs} args - Arguments to find a MedicinePurchess
     * @example
     * // Get one MedicinePurchess
     * const medicinePurchess = await prisma.medicinePurchess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicinePurchessFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicinePurchessFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicinePurchessClient<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicinePurchesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePurchessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicinePurchesses
     * const medicinePurchesses = await prisma.medicinePurchess.findMany()
     * 
     * // Get first 10 MedicinePurchesses
     * const medicinePurchesses = await prisma.medicinePurchess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicinePurchessWithIdOnly = await prisma.medicinePurchess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicinePurchessFindManyArgs>(args?: SelectSubset<T, MedicinePurchessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicinePurchess.
     * @param {MedicinePurchessCreateArgs} args - Arguments to create a MedicinePurchess.
     * @example
     * // Create one MedicinePurchess
     * const MedicinePurchess = await prisma.medicinePurchess.create({
     *   data: {
     *     // ... data to create a MedicinePurchess
     *   }
     * })
     * 
     */
    create<T extends MedicinePurchessCreateArgs>(args: SelectSubset<T, MedicinePurchessCreateArgs<ExtArgs>>): Prisma__MedicinePurchessClient<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicinePurchesses.
     * @param {MedicinePurchessCreateManyArgs} args - Arguments to create many MedicinePurchesses.
     * @example
     * // Create many MedicinePurchesses
     * const medicinePurchess = await prisma.medicinePurchess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicinePurchessCreateManyArgs>(args?: SelectSubset<T, MedicinePurchessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicinePurchesses and returns the data saved in the database.
     * @param {MedicinePurchessCreateManyAndReturnArgs} args - Arguments to create many MedicinePurchesses.
     * @example
     * // Create many MedicinePurchesses
     * const medicinePurchess = await prisma.medicinePurchess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicinePurchesses and only return the `id`
     * const medicinePurchessWithIdOnly = await prisma.medicinePurchess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicinePurchessCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicinePurchessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicinePurchess.
     * @param {MedicinePurchessDeleteArgs} args - Arguments to delete one MedicinePurchess.
     * @example
     * // Delete one MedicinePurchess
     * const MedicinePurchess = await prisma.medicinePurchess.delete({
     *   where: {
     *     // ... filter to delete one MedicinePurchess
     *   }
     * })
     * 
     */
    delete<T extends MedicinePurchessDeleteArgs>(args: SelectSubset<T, MedicinePurchessDeleteArgs<ExtArgs>>): Prisma__MedicinePurchessClient<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicinePurchess.
     * @param {MedicinePurchessUpdateArgs} args - Arguments to update one MedicinePurchess.
     * @example
     * // Update one MedicinePurchess
     * const medicinePurchess = await prisma.medicinePurchess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicinePurchessUpdateArgs>(args: SelectSubset<T, MedicinePurchessUpdateArgs<ExtArgs>>): Prisma__MedicinePurchessClient<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicinePurchesses.
     * @param {MedicinePurchessDeleteManyArgs} args - Arguments to filter MedicinePurchesses to delete.
     * @example
     * // Delete a few MedicinePurchesses
     * const { count } = await prisma.medicinePurchess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicinePurchessDeleteManyArgs>(args?: SelectSubset<T, MedicinePurchessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicinePurchesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePurchessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicinePurchesses
     * const medicinePurchess = await prisma.medicinePurchess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicinePurchessUpdateManyArgs>(args: SelectSubset<T, MedicinePurchessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicinePurchesses and returns the data updated in the database.
     * @param {MedicinePurchessUpdateManyAndReturnArgs} args - Arguments to update many MedicinePurchesses.
     * @example
     * // Update many MedicinePurchesses
     * const medicinePurchess = await prisma.medicinePurchess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicinePurchesses and only return the `id`
     * const medicinePurchessWithIdOnly = await prisma.medicinePurchess.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicinePurchessUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicinePurchessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicinePurchess.
     * @param {MedicinePurchessUpsertArgs} args - Arguments to update or create a MedicinePurchess.
     * @example
     * // Update or create a MedicinePurchess
     * const medicinePurchess = await prisma.medicinePurchess.upsert({
     *   create: {
     *     // ... data to create a MedicinePurchess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicinePurchess we want to update
     *   }
     * })
     */
    upsert<T extends MedicinePurchessUpsertArgs>(args: SelectSubset<T, MedicinePurchessUpsertArgs<ExtArgs>>): Prisma__MedicinePurchessClient<$Result.GetResult<Prisma.$MedicinePurchessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicinePurchesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePurchessCountArgs} args - Arguments to filter MedicinePurchesses to count.
     * @example
     * // Count the number of MedicinePurchesses
     * const count = await prisma.medicinePurchess.count({
     *   where: {
     *     // ... the filter for the MedicinePurchesses we want to count
     *   }
     * })
    **/
    count<T extends MedicinePurchessCountArgs>(
      args?: Subset<T, MedicinePurchessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicinePurchessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicinePurchess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePurchessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicinePurchessAggregateArgs>(args: Subset<T, MedicinePurchessAggregateArgs>): Prisma.PrismaPromise<GetMedicinePurchessAggregateType<T>>

    /**
     * Group by MedicinePurchess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinePurchessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicinePurchessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicinePurchessGroupByArgs['orderBy'] }
        : { orderBy?: MedicinePurchessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicinePurchessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicinePurchessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicinePurchess model
   */
  readonly fields: MedicinePurchessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicinePurchess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicinePurchessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicineCategory<T extends MedicineNameCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineNameCategoryDefaultArgs<ExtArgs>>): Prisma__MedicineNameCategoryClient<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicineNameAdd<T extends MedicineNameAddDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineNameAddDefaultArgs<ExtArgs>>): Prisma__MedicineNameAddClient<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicinePurchess model
   */
  interface MedicinePurchessFieldRefs {
    readonly id: FieldRef<"MedicinePurchess", 'String'>
    readonly genericName: FieldRef<"MedicinePurchess", 'String'>
    readonly name: FieldRef<"MedicinePurchess", 'String'>
    readonly purchaseUnitPrice: FieldRef<"MedicinePurchess", 'Int'>
    readonly sellUnitPrice: FieldRef<"MedicinePurchess", 'Int'>
    readonly purchaseQuantity: FieldRef<"MedicinePurchess", 'Int'>
    readonly mfgDate: FieldRef<"MedicinePurchess", 'String'>
    readonly expDate: FieldRef<"MedicinePurchess", 'String'>
    readonly bonusQuantity: FieldRef<"MedicinePurchess", 'Int'>
    readonly purchaseTotalPrice: FieldRef<"MedicinePurchess", 'Int'>
    readonly supplierInfo: FieldRef<"MedicinePurchess", 'String'>
    readonly branchCode: FieldRef<"MedicinePurchess", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MedicinePurchess findUnique
   */
  export type MedicinePurchessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    /**
     * Filter, which MedicinePurchess to fetch.
     */
    where: MedicinePurchessWhereUniqueInput
  }

  /**
   * MedicinePurchess findUniqueOrThrow
   */
  export type MedicinePurchessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    /**
     * Filter, which MedicinePurchess to fetch.
     */
    where: MedicinePurchessWhereUniqueInput
  }

  /**
   * MedicinePurchess findFirst
   */
  export type MedicinePurchessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    /**
     * Filter, which MedicinePurchess to fetch.
     */
    where?: MedicinePurchessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinePurchesses to fetch.
     */
    orderBy?: MedicinePurchessOrderByWithRelationInput | MedicinePurchessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicinePurchesses.
     */
    cursor?: MedicinePurchessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinePurchesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinePurchesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicinePurchesses.
     */
    distinct?: MedicinePurchessScalarFieldEnum | MedicinePurchessScalarFieldEnum[]
  }

  /**
   * MedicinePurchess findFirstOrThrow
   */
  export type MedicinePurchessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    /**
     * Filter, which MedicinePurchess to fetch.
     */
    where?: MedicinePurchessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinePurchesses to fetch.
     */
    orderBy?: MedicinePurchessOrderByWithRelationInput | MedicinePurchessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicinePurchesses.
     */
    cursor?: MedicinePurchessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinePurchesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinePurchesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicinePurchesses.
     */
    distinct?: MedicinePurchessScalarFieldEnum | MedicinePurchessScalarFieldEnum[]
  }

  /**
   * MedicinePurchess findMany
   */
  export type MedicinePurchessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    /**
     * Filter, which MedicinePurchesses to fetch.
     */
    where?: MedicinePurchessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicinePurchesses to fetch.
     */
    orderBy?: MedicinePurchessOrderByWithRelationInput | MedicinePurchessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicinePurchesses.
     */
    cursor?: MedicinePurchessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicinePurchesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicinePurchesses.
     */
    skip?: number
    distinct?: MedicinePurchessScalarFieldEnum | MedicinePurchessScalarFieldEnum[]
  }

  /**
   * MedicinePurchess create
   */
  export type MedicinePurchessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicinePurchess.
     */
    data: XOR<MedicinePurchessCreateInput, MedicinePurchessUncheckedCreateInput>
  }

  /**
   * MedicinePurchess createMany
   */
  export type MedicinePurchessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicinePurchesses.
     */
    data: MedicinePurchessCreateManyInput | MedicinePurchessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicinePurchess createManyAndReturn
   */
  export type MedicinePurchessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * The data used to create many MedicinePurchesses.
     */
    data: MedicinePurchessCreateManyInput | MedicinePurchessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicinePurchess update
   */
  export type MedicinePurchessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicinePurchess.
     */
    data: XOR<MedicinePurchessUpdateInput, MedicinePurchessUncheckedUpdateInput>
    /**
     * Choose, which MedicinePurchess to update.
     */
    where: MedicinePurchessWhereUniqueInput
  }

  /**
   * MedicinePurchess updateMany
   */
  export type MedicinePurchessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicinePurchesses.
     */
    data: XOR<MedicinePurchessUpdateManyMutationInput, MedicinePurchessUncheckedUpdateManyInput>
    /**
     * Filter which MedicinePurchesses to update
     */
    where?: MedicinePurchessWhereInput
    /**
     * Limit how many MedicinePurchesses to update.
     */
    limit?: number
  }

  /**
   * MedicinePurchess updateManyAndReturn
   */
  export type MedicinePurchessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * The data used to update MedicinePurchesses.
     */
    data: XOR<MedicinePurchessUpdateManyMutationInput, MedicinePurchessUncheckedUpdateManyInput>
    /**
     * Filter which MedicinePurchesses to update
     */
    where?: MedicinePurchessWhereInput
    /**
     * Limit how many MedicinePurchesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicinePurchess upsert
   */
  export type MedicinePurchessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicinePurchess to update in case it exists.
     */
    where: MedicinePurchessWhereUniqueInput
    /**
     * In case the MedicinePurchess found by the `where` argument doesn't exist, create a new MedicinePurchess with this data.
     */
    create: XOR<MedicinePurchessCreateInput, MedicinePurchessUncheckedCreateInput>
    /**
     * In case the MedicinePurchess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicinePurchessUpdateInput, MedicinePurchessUncheckedUpdateInput>
  }

  /**
   * MedicinePurchess delete
   */
  export type MedicinePurchessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
    /**
     * Filter which MedicinePurchess to delete.
     */
    where: MedicinePurchessWhereUniqueInput
  }

  /**
   * MedicinePurchess deleteMany
   */
  export type MedicinePurchessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicinePurchesses to delete
     */
    where?: MedicinePurchessWhereInput
    /**
     * Limit how many MedicinePurchesses to delete.
     */
    limit?: number
  }

  /**
   * MedicinePurchess without action
   */
  export type MedicinePurchessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinePurchess
     */
    select?: MedicinePurchessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicinePurchess
     */
    omit?: MedicinePurchessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicinePurchessInclude<ExtArgs> | null
  }


  /**
   * Model MedicineStock
   */

  export type AggregateMedicineStock = {
    _count: MedicineStockCountAggregateOutputType | null
    _avg: MedicineStockAvgAggregateOutputType | null
    _sum: MedicineStockSumAggregateOutputType | null
    _min: MedicineStockMinAggregateOutputType | null
    _max: MedicineStockMaxAggregateOutputType | null
  }

  export type MedicineStockAvgAggregateOutputType = {
    totalStock: number | null
    price: number | null
  }

  export type MedicineStockSumAggregateOutputType = {
    totalStock: number | null
    price: number | null
  }

  export type MedicineStockMinAggregateOutputType = {
    id: string | null
    genericName: string | null
    medicineName: string | null
    branchCode: string | null
    totalStock: number | null
    price: number | null
  }

  export type MedicineStockMaxAggregateOutputType = {
    id: string | null
    genericName: string | null
    medicineName: string | null
    branchCode: string | null
    totalStock: number | null
    price: number | null
  }

  export type MedicineStockCountAggregateOutputType = {
    id: number
    genericName: number
    medicineName: number
    branchCode: number
    totalStock: number
    price: number
    _all: number
  }


  export type MedicineStockAvgAggregateInputType = {
    totalStock?: true
    price?: true
  }

  export type MedicineStockSumAggregateInputType = {
    totalStock?: true
    price?: true
  }

  export type MedicineStockMinAggregateInputType = {
    id?: true
    genericName?: true
    medicineName?: true
    branchCode?: true
    totalStock?: true
    price?: true
  }

  export type MedicineStockMaxAggregateInputType = {
    id?: true
    genericName?: true
    medicineName?: true
    branchCode?: true
    totalStock?: true
    price?: true
  }

  export type MedicineStockCountAggregateInputType = {
    id?: true
    genericName?: true
    medicineName?: true
    branchCode?: true
    totalStock?: true
    price?: true
    _all?: true
  }

  export type MedicineStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineStock to aggregate.
     */
    where?: MedicineStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineStocks to fetch.
     */
    orderBy?: MedicineStockOrderByWithRelationInput | MedicineStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicineStocks
    **/
    _count?: true | MedicineStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineStockMaxAggregateInputType
  }

  export type GetMedicineStockAggregateType<T extends MedicineStockAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicineStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicineStock[P]>
      : GetScalarType<T[P], AggregateMedicineStock[P]>
  }




  export type MedicineStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineStockWhereInput
    orderBy?: MedicineStockOrderByWithAggregationInput | MedicineStockOrderByWithAggregationInput[]
    by: MedicineStockScalarFieldEnum[] | MedicineStockScalarFieldEnum
    having?: MedicineStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineStockCountAggregateInputType | true
    _avg?: MedicineStockAvgAggregateInputType
    _sum?: MedicineStockSumAggregateInputType
    _min?: MedicineStockMinAggregateInputType
    _max?: MedicineStockMaxAggregateInputType
  }

  export type MedicineStockGroupByOutputType = {
    id: string
    genericName: string
    medicineName: string
    branchCode: string
    totalStock: number
    price: number
    _count: MedicineStockCountAggregateOutputType | null
    _avg: MedicineStockAvgAggregateOutputType | null
    _sum: MedicineStockSumAggregateOutputType | null
    _min: MedicineStockMinAggregateOutputType | null
    _max: MedicineStockMaxAggregateOutputType | null
  }

  type GetMedicineStockGroupByPayload<T extends MedicineStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineStockGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineStockGroupByOutputType[P]>
        }
      >
    >


  export type MedicineStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    medicineName?: boolean
    branchCode?: boolean
    totalStock?: boolean
    price?: boolean
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineStock"]>

  export type MedicineStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    medicineName?: boolean
    branchCode?: boolean
    totalStock?: boolean
    price?: boolean
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineStock"]>

  export type MedicineStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    genericName?: boolean
    medicineName?: boolean
    branchCode?: boolean
    totalStock?: boolean
    price?: boolean
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineStock"]>

  export type MedicineStockSelectScalar = {
    id?: boolean
    genericName?: boolean
    medicineName?: boolean
    branchCode?: boolean
    totalStock?: boolean
    price?: boolean
  }

  export type MedicineStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "genericName" | "medicineName" | "branchCode" | "totalStock" | "price", ExtArgs["result"]["medicineStock"]>
  export type MedicineStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type MedicineStockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type MedicineStockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineNameAdd?: boolean | MedicineNameAddDefaultArgs<ExtArgs>
    medicineCategory?: boolean | MedicineNameCategoryDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $MedicineStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicineStock"
    objects: {
      medicineNameAdd: Prisma.$MedicineNameAddPayload<ExtArgs>
      medicineCategory: Prisma.$MedicineNameCategoryPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      genericName: string
      medicineName: string
      branchCode: string
      totalStock: number
      price: number
    }, ExtArgs["result"]["medicineStock"]>
    composites: {}
  }

  type MedicineStockGetPayload<S extends boolean | null | undefined | MedicineStockDefaultArgs> = $Result.GetResult<Prisma.$MedicineStockPayload, S>

  type MedicineStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineStockCountAggregateInputType | true
    }

  export interface MedicineStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicineStock'], meta: { name: 'MedicineStock' } }
    /**
     * Find zero or one MedicineStock that matches the filter.
     * @param {MedicineStockFindUniqueArgs} args - Arguments to find a MedicineStock
     * @example
     * // Get one MedicineStock
     * const medicineStock = await prisma.medicineStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineStockFindUniqueArgs>(args: SelectSubset<T, MedicineStockFindUniqueArgs<ExtArgs>>): Prisma__MedicineStockClient<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicineStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineStockFindUniqueOrThrowArgs} args - Arguments to find a MedicineStock
     * @example
     * // Get one MedicineStock
     * const medicineStock = await prisma.medicineStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineStockFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineStockClient<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicineStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineStockFindFirstArgs} args - Arguments to find a MedicineStock
     * @example
     * // Get one MedicineStock
     * const medicineStock = await prisma.medicineStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineStockFindFirstArgs>(args?: SelectSubset<T, MedicineStockFindFirstArgs<ExtArgs>>): Prisma__MedicineStockClient<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicineStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineStockFindFirstOrThrowArgs} args - Arguments to find a MedicineStock
     * @example
     * // Get one MedicineStock
     * const medicineStock = await prisma.medicineStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineStockFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineStockClient<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicineStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicineStocks
     * const medicineStocks = await prisma.medicineStock.findMany()
     * 
     * // Get first 10 MedicineStocks
     * const medicineStocks = await prisma.medicineStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineStockWithIdOnly = await prisma.medicineStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineStockFindManyArgs>(args?: SelectSubset<T, MedicineStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicineStock.
     * @param {MedicineStockCreateArgs} args - Arguments to create a MedicineStock.
     * @example
     * // Create one MedicineStock
     * const MedicineStock = await prisma.medicineStock.create({
     *   data: {
     *     // ... data to create a MedicineStock
     *   }
     * })
     * 
     */
    create<T extends MedicineStockCreateArgs>(args: SelectSubset<T, MedicineStockCreateArgs<ExtArgs>>): Prisma__MedicineStockClient<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicineStocks.
     * @param {MedicineStockCreateManyArgs} args - Arguments to create many MedicineStocks.
     * @example
     * // Create many MedicineStocks
     * const medicineStock = await prisma.medicineStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineStockCreateManyArgs>(args?: SelectSubset<T, MedicineStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicineStocks and returns the data saved in the database.
     * @param {MedicineStockCreateManyAndReturnArgs} args - Arguments to create many MedicineStocks.
     * @example
     * // Create many MedicineStocks
     * const medicineStock = await prisma.medicineStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicineStocks and only return the `id`
     * const medicineStockWithIdOnly = await prisma.medicineStock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineStockCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicineStock.
     * @param {MedicineStockDeleteArgs} args - Arguments to delete one MedicineStock.
     * @example
     * // Delete one MedicineStock
     * const MedicineStock = await prisma.medicineStock.delete({
     *   where: {
     *     // ... filter to delete one MedicineStock
     *   }
     * })
     * 
     */
    delete<T extends MedicineStockDeleteArgs>(args: SelectSubset<T, MedicineStockDeleteArgs<ExtArgs>>): Prisma__MedicineStockClient<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicineStock.
     * @param {MedicineStockUpdateArgs} args - Arguments to update one MedicineStock.
     * @example
     * // Update one MedicineStock
     * const medicineStock = await prisma.medicineStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineStockUpdateArgs>(args: SelectSubset<T, MedicineStockUpdateArgs<ExtArgs>>): Prisma__MedicineStockClient<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicineStocks.
     * @param {MedicineStockDeleteManyArgs} args - Arguments to filter MedicineStocks to delete.
     * @example
     * // Delete a few MedicineStocks
     * const { count } = await prisma.medicineStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineStockDeleteManyArgs>(args?: SelectSubset<T, MedicineStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicineStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicineStocks
     * const medicineStock = await prisma.medicineStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineStockUpdateManyArgs>(args: SelectSubset<T, MedicineStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicineStocks and returns the data updated in the database.
     * @param {MedicineStockUpdateManyAndReturnArgs} args - Arguments to update many MedicineStocks.
     * @example
     * // Update many MedicineStocks
     * const medicineStock = await prisma.medicineStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicineStocks and only return the `id`
     * const medicineStockWithIdOnly = await prisma.medicineStock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicineStockUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicineStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicineStock.
     * @param {MedicineStockUpsertArgs} args - Arguments to update or create a MedicineStock.
     * @example
     * // Update or create a MedicineStock
     * const medicineStock = await prisma.medicineStock.upsert({
     *   create: {
     *     // ... data to create a MedicineStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicineStock we want to update
     *   }
     * })
     */
    upsert<T extends MedicineStockUpsertArgs>(args: SelectSubset<T, MedicineStockUpsertArgs<ExtArgs>>): Prisma__MedicineStockClient<$Result.GetResult<Prisma.$MedicineStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicineStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineStockCountArgs} args - Arguments to filter MedicineStocks to count.
     * @example
     * // Count the number of MedicineStocks
     * const count = await prisma.medicineStock.count({
     *   where: {
     *     // ... the filter for the MedicineStocks we want to count
     *   }
     * })
    **/
    count<T extends MedicineStockCountArgs>(
      args?: Subset<T, MedicineStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicineStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineStockAggregateArgs>(args: Subset<T, MedicineStockAggregateArgs>): Prisma.PrismaPromise<GetMedicineStockAggregateType<T>>

    /**
     * Group by MedicineStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineStockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineStockGroupByArgs['orderBy'] }
        : { orderBy?: MedicineStockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicineStock model
   */
  readonly fields: MedicineStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicineStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicineNameAdd<T extends MedicineNameAddDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineNameAddDefaultArgs<ExtArgs>>): Prisma__MedicineNameAddClient<$Result.GetResult<Prisma.$MedicineNameAddPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicineCategory<T extends MedicineNameCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineNameCategoryDefaultArgs<ExtArgs>>): Prisma__MedicineNameCategoryClient<$Result.GetResult<Prisma.$MedicineNameCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicineStock model
   */
  interface MedicineStockFieldRefs {
    readonly id: FieldRef<"MedicineStock", 'String'>
    readonly genericName: FieldRef<"MedicineStock", 'String'>
    readonly medicineName: FieldRef<"MedicineStock", 'String'>
    readonly branchCode: FieldRef<"MedicineStock", 'String'>
    readonly totalStock: FieldRef<"MedicineStock", 'Int'>
    readonly price: FieldRef<"MedicineStock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MedicineStock findUnique
   */
  export type MedicineStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    /**
     * Filter, which MedicineStock to fetch.
     */
    where: MedicineStockWhereUniqueInput
  }

  /**
   * MedicineStock findUniqueOrThrow
   */
  export type MedicineStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    /**
     * Filter, which MedicineStock to fetch.
     */
    where: MedicineStockWhereUniqueInput
  }

  /**
   * MedicineStock findFirst
   */
  export type MedicineStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    /**
     * Filter, which MedicineStock to fetch.
     */
    where?: MedicineStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineStocks to fetch.
     */
    orderBy?: MedicineStockOrderByWithRelationInput | MedicineStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineStocks.
     */
    cursor?: MedicineStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineStocks.
     */
    distinct?: MedicineStockScalarFieldEnum | MedicineStockScalarFieldEnum[]
  }

  /**
   * MedicineStock findFirstOrThrow
   */
  export type MedicineStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    /**
     * Filter, which MedicineStock to fetch.
     */
    where?: MedicineStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineStocks to fetch.
     */
    orderBy?: MedicineStockOrderByWithRelationInput | MedicineStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineStocks.
     */
    cursor?: MedicineStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineStocks.
     */
    distinct?: MedicineStockScalarFieldEnum | MedicineStockScalarFieldEnum[]
  }

  /**
   * MedicineStock findMany
   */
  export type MedicineStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    /**
     * Filter, which MedicineStocks to fetch.
     */
    where?: MedicineStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineStocks to fetch.
     */
    orderBy?: MedicineStockOrderByWithRelationInput | MedicineStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicineStocks.
     */
    cursor?: MedicineStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineStocks.
     */
    skip?: number
    distinct?: MedicineStockScalarFieldEnum | MedicineStockScalarFieldEnum[]
  }

  /**
   * MedicineStock create
   */
  export type MedicineStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicineStock.
     */
    data: XOR<MedicineStockCreateInput, MedicineStockUncheckedCreateInput>
  }

  /**
   * MedicineStock createMany
   */
  export type MedicineStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicineStocks.
     */
    data: MedicineStockCreateManyInput | MedicineStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicineStock createManyAndReturn
   */
  export type MedicineStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * The data used to create many MedicineStocks.
     */
    data: MedicineStockCreateManyInput | MedicineStockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicineStock update
   */
  export type MedicineStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicineStock.
     */
    data: XOR<MedicineStockUpdateInput, MedicineStockUncheckedUpdateInput>
    /**
     * Choose, which MedicineStock to update.
     */
    where: MedicineStockWhereUniqueInput
  }

  /**
   * MedicineStock updateMany
   */
  export type MedicineStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicineStocks.
     */
    data: XOR<MedicineStockUpdateManyMutationInput, MedicineStockUncheckedUpdateManyInput>
    /**
     * Filter which MedicineStocks to update
     */
    where?: MedicineStockWhereInput
    /**
     * Limit how many MedicineStocks to update.
     */
    limit?: number
  }

  /**
   * MedicineStock updateManyAndReturn
   */
  export type MedicineStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * The data used to update MedicineStocks.
     */
    data: XOR<MedicineStockUpdateManyMutationInput, MedicineStockUncheckedUpdateManyInput>
    /**
     * Filter which MedicineStocks to update
     */
    where?: MedicineStockWhereInput
    /**
     * Limit how many MedicineStocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicineStock upsert
   */
  export type MedicineStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicineStock to update in case it exists.
     */
    where: MedicineStockWhereUniqueInput
    /**
     * In case the MedicineStock found by the `where` argument doesn't exist, create a new MedicineStock with this data.
     */
    create: XOR<MedicineStockCreateInput, MedicineStockUncheckedCreateInput>
    /**
     * In case the MedicineStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineStockUpdateInput, MedicineStockUncheckedUpdateInput>
  }

  /**
   * MedicineStock delete
   */
  export type MedicineStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
    /**
     * Filter which MedicineStock to delete.
     */
    where: MedicineStockWhereUniqueInput
  }

  /**
   * MedicineStock deleteMany
   */
  export type MedicineStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineStocks to delete
     */
    where?: MedicineStockWhereInput
    /**
     * Limit how many MedicineStocks to delete.
     */
    limit?: number
  }

  /**
   * MedicineStock without action
   */
  export type MedicineStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineStock
     */
    select?: MedicineStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineStock
     */
    omit?: MedicineStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineStockInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BranchScalarFieldEnum: {
    id: 'id',
    locationName: 'locationName',
    type: 'type',
    branchCode: 'branchCode'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    branchCode: 'branchCode',
    farmCode: 'farmCode',
    name: 'name',
    farmType: 'farmType',
    totalShed: 'totalShed',
    totalSquare: 'totalSquare',
    capacity: 'capacity',
    nid: 'nid'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    village: 'village',
    post: 'post',
    union: 'union',
    thana: 'thana',
    upazila: 'upazila',
    phoneNumber: 'phoneNumber',
    city: 'city',
    employeeId: 'employeeId',
    farmCode: 'farmCode'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const BranchEmployeeScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    branchCode: 'branchCode'
  };

  export type BranchEmployeeScalarFieldEnum = (typeof BranchEmployeeScalarFieldEnum)[keyof typeof BranchEmployeeScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    name: 'name',
    workingLocation: 'workingLocation',
    designation: 'designation',
    branchId: 'branchId'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const FlockScalarFieldEnum: {
    id: 'id',
    flockNumber: 'flockNumber',
    flockStatus: 'flockStatus',
    startDate: 'startDate',
    endDate: 'endDate',
    executiveId: 'executiveId',
    farmCode: 'farmCode',
    docName: 'docName',
    docQuantity: 'docQuantity',
    approvedBy: 'approvedBy',
    branchCode: 'branchCode',
    totalFeedKg: 'totalFeedKg',
    totalMedicine: 'totalMedicine',
    fcr: 'fcr',
    totalSellBirds: 'totalSellBirds',
    mortality: 'mortality'
  };

  export type FlockScalarFieldEnum = (typeof FlockScalarFieldEnum)[keyof typeof FlockScalarFieldEnum]


  export const FeedNameCategoryScalarFieldEnum: {
    id: 'id',
    feedName: 'feedName',
    feedCodeNumber: 'feedCodeNumber'
  };

  export type FeedNameCategoryScalarFieldEnum = (typeof FeedNameCategoryScalarFieldEnum)[keyof typeof FeedNameCategoryScalarFieldEnum]


  export const FeedScalarFieldEnum: {
    id: 'id',
    feedName: 'feedName',
    stock: 'stock',
    branchCode: 'branchCode'
  };

  export type FeedScalarFieldEnum = (typeof FeedScalarFieldEnum)[keyof typeof FeedScalarFieldEnum]


  export const MedicineNameCategoryScalarFieldEnum: {
    id: 'id',
    genericName: 'genericName'
  };

  export type MedicineNameCategoryScalarFieldEnum = (typeof MedicineNameCategoryScalarFieldEnum)[keyof typeof MedicineNameCategoryScalarFieldEnum]


  export const MedicineNameAddScalarFieldEnum: {
    id: 'id',
    name: 'name',
    conpany: 'conpany',
    genericName: 'genericName'
  };

  export type MedicineNameAddScalarFieldEnum = (typeof MedicineNameAddScalarFieldEnum)[keyof typeof MedicineNameAddScalarFieldEnum]


  export const MedicinePurchessScalarFieldEnum: {
    id: 'id',
    genericName: 'genericName',
    name: 'name',
    purchaseUnitPrice: 'purchaseUnitPrice',
    sellUnitPrice: 'sellUnitPrice',
    purchaseQuantity: 'purchaseQuantity',
    mfgDate: 'mfgDate',
    expDate: 'expDate',
    bonusQuantity: 'bonusQuantity',
    purchaseTotalPrice: 'purchaseTotalPrice',
    supplierInfo: 'supplierInfo',
    branchCode: 'branchCode'
  };

  export type MedicinePurchessScalarFieldEnum = (typeof MedicinePurchessScalarFieldEnum)[keyof typeof MedicinePurchessScalarFieldEnum]


  export const MedicineStockScalarFieldEnum: {
    id: 'id',
    genericName: 'genericName',
    medicineName: 'medicineName',
    branchCode: 'branchCode',
    totalStock: 'totalStock',
    price: 'price'
  };

  export type MedicineStockScalarFieldEnum = (typeof MedicineStockScalarFieldEnum)[keyof typeof MedicineStockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BranchType'
   */
  export type EnumBranchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BranchType'>
    


  /**
   * Reference to a field of type 'BranchType[]'
   */
  export type ListEnumBranchTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BranchType[]'>
    


  /**
   * Reference to a field of type 'Custtype'
   */
  export type EnumCusttypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Custtype'>
    


  /**
   * Reference to a field of type 'Custtype[]'
   */
  export type ListEnumCusttypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Custtype[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'FlockStatus'
   */
  export type EnumFlockStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlockStatus'>
    


  /**
   * Reference to a field of type 'FlockStatus[]'
   */
  export type ListEnumFlockStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlockStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    locationName?: StringFilter<"Branch"> | string
    type?: EnumBranchTypeFilter<"Branch"> | $Enums.BranchType
    branchCode?: StringFilter<"Branch"> | string
    customers?: CustomerListRelationFilter
    employees?: EmployeeListRelationFilter
    branchEmployees?: BranchEmployeeListRelationFilter
    flocks?: FlockListRelationFilter
    Feed?: FeedListRelationFilter
    MedicineStock?: MedicineStockListRelationFilter
    MedicinePurchess?: MedicinePurchessListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    locationName?: SortOrder
    type?: SortOrder
    branchCode?: SortOrder
    customers?: CustomerOrderByRelationAggregateInput
    employees?: EmployeeOrderByRelationAggregateInput
    branchEmployees?: BranchEmployeeOrderByRelationAggregateInput
    flocks?: FlockOrderByRelationAggregateInput
    Feed?: FeedOrderByRelationAggregateInput
    MedicineStock?: MedicineStockOrderByRelationAggregateInput
    MedicinePurchess?: MedicinePurchessOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    locationName?: string
    branchCode?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    type?: EnumBranchTypeFilter<"Branch"> | $Enums.BranchType
    customers?: CustomerListRelationFilter
    employees?: EmployeeListRelationFilter
    branchEmployees?: BranchEmployeeListRelationFilter
    flocks?: FlockListRelationFilter
    Feed?: FeedListRelationFilter
    MedicineStock?: MedicineStockListRelationFilter
    MedicinePurchess?: MedicinePurchessListRelationFilter
  }, "id" | "locationName" | "branchCode">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    locationName?: SortOrder
    type?: SortOrder
    branchCode?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    locationName?: StringWithAggregatesFilter<"Branch"> | string
    type?: EnumBranchTypeWithAggregatesFilter<"Branch"> | $Enums.BranchType
    branchCode?: StringWithAggregatesFilter<"Branch"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    branchCode?: StringFilter<"Customer"> | string
    farmCode?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    farmType?: EnumCusttypeFilter<"Customer"> | $Enums.Custtype
    totalShed?: IntFilter<"Customer"> | number
    totalSquare?: IntFilter<"Customer"> | number
    capacity?: IntFilter<"Customer"> | number
    nid?: StringFilter<"Customer"> | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    flocks?: FlockListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    branchCode?: SortOrder
    farmCode?: SortOrder
    name?: SortOrder
    farmType?: SortOrder
    totalShed?: SortOrder
    totalSquare?: SortOrder
    capacity?: SortOrder
    nid?: SortOrder
    branch?: BranchOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    flocks?: FlockOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    farmCode?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    branchCode?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    farmType?: EnumCusttypeFilter<"Customer"> | $Enums.Custtype
    totalShed?: IntFilter<"Customer"> | number
    totalSquare?: IntFilter<"Customer"> | number
    capacity?: IntFilter<"Customer"> | number
    nid?: StringFilter<"Customer"> | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    flocks?: FlockListRelationFilter
  }, "id" | "farmCode">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    branchCode?: SortOrder
    farmCode?: SortOrder
    name?: SortOrder
    farmType?: SortOrder
    totalShed?: SortOrder
    totalSquare?: SortOrder
    capacity?: SortOrder
    nid?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    branchCode?: StringWithAggregatesFilter<"Customer"> | string
    farmCode?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    farmType?: EnumCusttypeWithAggregatesFilter<"Customer"> | $Enums.Custtype
    totalShed?: IntWithAggregatesFilter<"Customer"> | number
    totalSquare?: IntWithAggregatesFilter<"Customer"> | number
    capacity?: IntWithAggregatesFilter<"Customer"> | number
    nid?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    village?: StringFilter<"Address"> | string
    post?: StringFilter<"Address"> | string
    union?: StringNullableFilter<"Address"> | string | null
    thana?: StringNullableFilter<"Address"> | string | null
    upazila?: StringFilter<"Address"> | string
    phoneNumber?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    employeeId?: StringNullableFilter<"Address"> | string | null
    farmCode?: StringNullableFilter<"Address"> | string | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    village?: SortOrder
    post?: SortOrder
    union?: SortOrderInput | SortOrder
    thana?: SortOrderInput | SortOrder
    upazila?: SortOrder
    phoneNumber?: SortOrder
    city?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    farmCode?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId?: string
    farmCode?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    village?: StringFilter<"Address"> | string
    post?: StringFilter<"Address"> | string
    union?: StringNullableFilter<"Address"> | string | null
    thana?: StringNullableFilter<"Address"> | string | null
    upazila?: StringFilter<"Address"> | string
    phoneNumber?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "id" | "employeeId" | "farmCode">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    village?: SortOrder
    post?: SortOrder
    union?: SortOrderInput | SortOrder
    thana?: SortOrderInput | SortOrder
    upazila?: SortOrder
    phoneNumber?: SortOrder
    city?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    farmCode?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    village?: StringWithAggregatesFilter<"Address"> | string
    post?: StringWithAggregatesFilter<"Address"> | string
    union?: StringNullableWithAggregatesFilter<"Address"> | string | null
    thana?: StringNullableWithAggregatesFilter<"Address"> | string | null
    upazila?: StringWithAggregatesFilter<"Address"> | string
    phoneNumber?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    employeeId?: StringNullableWithAggregatesFilter<"Address"> | string | null
    farmCode?: StringNullableWithAggregatesFilter<"Address"> | string | null
  }

  export type BranchEmployeeWhereInput = {
    AND?: BranchEmployeeWhereInput | BranchEmployeeWhereInput[]
    OR?: BranchEmployeeWhereInput[]
    NOT?: BranchEmployeeWhereInput | BranchEmployeeWhereInput[]
    id?: StringFilter<"BranchEmployee"> | string
    employeeId?: StringFilter<"BranchEmployee"> | string
    branchCode?: StringFilter<"BranchEmployee"> | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type BranchEmployeeOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    branchCode?: SortOrder
    branch?: BranchOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type BranchEmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BranchEmployeeWhereInput | BranchEmployeeWhereInput[]
    OR?: BranchEmployeeWhereInput[]
    NOT?: BranchEmployeeWhereInput | BranchEmployeeWhereInput[]
    employeeId?: StringFilter<"BranchEmployee"> | string
    branchCode?: StringFilter<"BranchEmployee"> | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type BranchEmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    branchCode?: SortOrder
    _count?: BranchEmployeeCountOrderByAggregateInput
    _max?: BranchEmployeeMaxOrderByAggregateInput
    _min?: BranchEmployeeMinOrderByAggregateInput
  }

  export type BranchEmployeeScalarWhereWithAggregatesInput = {
    AND?: BranchEmployeeScalarWhereWithAggregatesInput | BranchEmployeeScalarWhereWithAggregatesInput[]
    OR?: BranchEmployeeScalarWhereWithAggregatesInput[]
    NOT?: BranchEmployeeScalarWhereWithAggregatesInput | BranchEmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BranchEmployee"> | string
    employeeId?: StringWithAggregatesFilter<"BranchEmployee"> | string
    branchCode?: StringWithAggregatesFilter<"BranchEmployee"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    employeeId?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    workingLocation?: StringFilter<"Employee"> | string
    designation?: StringFilter<"Employee"> | string
    branchId?: StringNullableFilter<"Employee"> | string | null
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    branchEmployees?: BranchEmployeeListRelationFilter
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    flocks?: FlockListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    workingLocation?: SortOrder
    designation?: SortOrder
    branchId?: SortOrderInput | SortOrder
    branch?: BranchOrderByWithRelationInput
    branchEmployees?: BranchEmployeeOrderByRelationAggregateInput
    address?: AddressOrderByWithRelationInput
    flocks?: FlockOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeId?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    workingLocation?: StringFilter<"Employee"> | string
    designation?: StringFilter<"Employee"> | string
    branchId?: StringNullableFilter<"Employee"> | string | null
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    branchEmployees?: BranchEmployeeListRelationFilter
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    flocks?: FlockListRelationFilter
  }, "id" | "employeeId">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    workingLocation?: SortOrder
    designation?: SortOrder
    branchId?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    employeeId?: StringWithAggregatesFilter<"Employee"> | string
    name?: StringWithAggregatesFilter<"Employee"> | string
    workingLocation?: StringWithAggregatesFilter<"Employee"> | string
    designation?: StringWithAggregatesFilter<"Employee"> | string
    branchId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
  }

  export type FlockWhereInput = {
    AND?: FlockWhereInput | FlockWhereInput[]
    OR?: FlockWhereInput[]
    NOT?: FlockWhereInput | FlockWhereInput[]
    id?: StringFilter<"Flock"> | string
    flockNumber?: IntFilter<"Flock"> | number
    flockStatus?: EnumFlockStatusFilter<"Flock"> | $Enums.FlockStatus
    startDate?: DateTimeFilter<"Flock"> | Date | string
    endDate?: DateTimeNullableFilter<"Flock"> | Date | string | null
    executiveId?: StringFilter<"Flock"> | string
    farmCode?: StringFilter<"Flock"> | string
    docName?: StringFilter<"Flock"> | string
    docQuantity?: IntFilter<"Flock"> | number
    approvedBy?: StringNullableFilter<"Flock"> | string | null
    branchCode?: StringFilter<"Flock"> | string
    totalFeedKg?: IntFilter<"Flock"> | number
    totalMedicine?: IntFilter<"Flock"> | number
    fcr?: FloatFilter<"Flock"> | number
    totalSellBirds?: IntFilter<"Flock"> | number
    mortality?: IntFilter<"Flock"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }

  export type FlockOrderByWithRelationInput = {
    id?: SortOrder
    flockNumber?: SortOrder
    flockStatus?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    executiveId?: SortOrder
    farmCode?: SortOrder
    docName?: SortOrder
    docQuantity?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    branchCode?: SortOrder
    totalFeedKg?: SortOrder
    totalMedicine?: SortOrder
    fcr?: SortOrder
    totalSellBirds?: SortOrder
    mortality?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
  }

  export type FlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    flockNumber?: number
    AND?: FlockWhereInput | FlockWhereInput[]
    OR?: FlockWhereInput[]
    NOT?: FlockWhereInput | FlockWhereInput[]
    flockStatus?: EnumFlockStatusFilter<"Flock"> | $Enums.FlockStatus
    startDate?: DateTimeFilter<"Flock"> | Date | string
    endDate?: DateTimeNullableFilter<"Flock"> | Date | string | null
    executiveId?: StringFilter<"Flock"> | string
    farmCode?: StringFilter<"Flock"> | string
    docName?: StringFilter<"Flock"> | string
    docQuantity?: IntFilter<"Flock"> | number
    approvedBy?: StringNullableFilter<"Flock"> | string | null
    branchCode?: StringFilter<"Flock"> | string
    totalFeedKg?: IntFilter<"Flock"> | number
    totalMedicine?: IntFilter<"Flock"> | number
    fcr?: FloatFilter<"Flock"> | number
    totalSellBirds?: IntFilter<"Flock"> | number
    mortality?: IntFilter<"Flock"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }, "id" | "flockNumber">

  export type FlockOrderByWithAggregationInput = {
    id?: SortOrder
    flockNumber?: SortOrder
    flockStatus?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    executiveId?: SortOrder
    farmCode?: SortOrder
    docName?: SortOrder
    docQuantity?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    branchCode?: SortOrder
    totalFeedKg?: SortOrder
    totalMedicine?: SortOrder
    fcr?: SortOrder
    totalSellBirds?: SortOrder
    mortality?: SortOrder
    _count?: FlockCountOrderByAggregateInput
    _avg?: FlockAvgOrderByAggregateInput
    _max?: FlockMaxOrderByAggregateInput
    _min?: FlockMinOrderByAggregateInput
    _sum?: FlockSumOrderByAggregateInput
  }

  export type FlockScalarWhereWithAggregatesInput = {
    AND?: FlockScalarWhereWithAggregatesInput | FlockScalarWhereWithAggregatesInput[]
    OR?: FlockScalarWhereWithAggregatesInput[]
    NOT?: FlockScalarWhereWithAggregatesInput | FlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flock"> | string
    flockNumber?: IntWithAggregatesFilter<"Flock"> | number
    flockStatus?: EnumFlockStatusWithAggregatesFilter<"Flock"> | $Enums.FlockStatus
    startDate?: DateTimeWithAggregatesFilter<"Flock"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Flock"> | Date | string | null
    executiveId?: StringWithAggregatesFilter<"Flock"> | string
    farmCode?: StringWithAggregatesFilter<"Flock"> | string
    docName?: StringWithAggregatesFilter<"Flock"> | string
    docQuantity?: IntWithAggregatesFilter<"Flock"> | number
    approvedBy?: StringNullableWithAggregatesFilter<"Flock"> | string | null
    branchCode?: StringWithAggregatesFilter<"Flock"> | string
    totalFeedKg?: IntWithAggregatesFilter<"Flock"> | number
    totalMedicine?: IntWithAggregatesFilter<"Flock"> | number
    fcr?: FloatWithAggregatesFilter<"Flock"> | number
    totalSellBirds?: IntWithAggregatesFilter<"Flock"> | number
    mortality?: IntWithAggregatesFilter<"Flock"> | number
  }

  export type FeedNameCategoryWhereInput = {
    AND?: FeedNameCategoryWhereInput | FeedNameCategoryWhereInput[]
    OR?: FeedNameCategoryWhereInput[]
    NOT?: FeedNameCategoryWhereInput | FeedNameCategoryWhereInput[]
    id?: StringFilter<"FeedNameCategory"> | string
    feedName?: StringFilter<"FeedNameCategory"> | string
    feedCodeNumber?: IntFilter<"FeedNameCategory"> | number
    feeds?: FeedListRelationFilter
  }

  export type FeedNameCategoryOrderByWithRelationInput = {
    id?: SortOrder
    feedName?: SortOrder
    feedCodeNumber?: SortOrder
    feeds?: FeedOrderByRelationAggregateInput
  }

  export type FeedNameCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    feedName?: string
    feedCodeNumber?: number
    AND?: FeedNameCategoryWhereInput | FeedNameCategoryWhereInput[]
    OR?: FeedNameCategoryWhereInput[]
    NOT?: FeedNameCategoryWhereInput | FeedNameCategoryWhereInput[]
    feeds?: FeedListRelationFilter
  }, "id" | "feedName" | "feedCodeNumber">

  export type FeedNameCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    feedName?: SortOrder
    feedCodeNumber?: SortOrder
    _count?: FeedNameCategoryCountOrderByAggregateInput
    _avg?: FeedNameCategoryAvgOrderByAggregateInput
    _max?: FeedNameCategoryMaxOrderByAggregateInput
    _min?: FeedNameCategoryMinOrderByAggregateInput
    _sum?: FeedNameCategorySumOrderByAggregateInput
  }

  export type FeedNameCategoryScalarWhereWithAggregatesInput = {
    AND?: FeedNameCategoryScalarWhereWithAggregatesInput | FeedNameCategoryScalarWhereWithAggregatesInput[]
    OR?: FeedNameCategoryScalarWhereWithAggregatesInput[]
    NOT?: FeedNameCategoryScalarWhereWithAggregatesInput | FeedNameCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeedNameCategory"> | string
    feedName?: StringWithAggregatesFilter<"FeedNameCategory"> | string
    feedCodeNumber?: IntWithAggregatesFilter<"FeedNameCategory"> | number
  }

  export type FeedWhereInput = {
    AND?: FeedWhereInput | FeedWhereInput[]
    OR?: FeedWhereInput[]
    NOT?: FeedWhereInput | FeedWhereInput[]
    id?: StringFilter<"Feed"> | string
    feedName?: StringFilter<"Feed"> | string
    stock?: IntFilter<"Feed"> | number
    branchCode?: StringNullableFilter<"Feed"> | string | null
    feedNameCategory?: XOR<FeedNameCategoryScalarRelationFilter, FeedNameCategoryWhereInput>
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
  }

  export type FeedOrderByWithRelationInput = {
    id?: SortOrder
    feedName?: SortOrder
    stock?: SortOrder
    branchCode?: SortOrderInput | SortOrder
    feedNameCategory?: FeedNameCategoryOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
  }

  export type FeedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedWhereInput | FeedWhereInput[]
    OR?: FeedWhereInput[]
    NOT?: FeedWhereInput | FeedWhereInput[]
    feedName?: StringFilter<"Feed"> | string
    stock?: IntFilter<"Feed"> | number
    branchCode?: StringNullableFilter<"Feed"> | string | null
    feedNameCategory?: XOR<FeedNameCategoryScalarRelationFilter, FeedNameCategoryWhereInput>
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
  }, "id">

  export type FeedOrderByWithAggregationInput = {
    id?: SortOrder
    feedName?: SortOrder
    stock?: SortOrder
    branchCode?: SortOrderInput | SortOrder
    _count?: FeedCountOrderByAggregateInput
    _avg?: FeedAvgOrderByAggregateInput
    _max?: FeedMaxOrderByAggregateInput
    _min?: FeedMinOrderByAggregateInput
    _sum?: FeedSumOrderByAggregateInput
  }

  export type FeedScalarWhereWithAggregatesInput = {
    AND?: FeedScalarWhereWithAggregatesInput | FeedScalarWhereWithAggregatesInput[]
    OR?: FeedScalarWhereWithAggregatesInput[]
    NOT?: FeedScalarWhereWithAggregatesInput | FeedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feed"> | string
    feedName?: StringWithAggregatesFilter<"Feed"> | string
    stock?: IntWithAggregatesFilter<"Feed"> | number
    branchCode?: StringNullableWithAggregatesFilter<"Feed"> | string | null
  }

  export type MedicineNameCategoryWhereInput = {
    AND?: MedicineNameCategoryWhereInput | MedicineNameCategoryWhereInput[]
    OR?: MedicineNameCategoryWhereInput[]
    NOT?: MedicineNameCategoryWhereInput | MedicineNameCategoryWhereInput[]
    id?: StringFilter<"MedicineNameCategory"> | string
    genericName?: StringFilter<"MedicineNameCategory"> | string
    medicineNameAdd?: MedicineNameAddListRelationFilter
    MedicineStock?: MedicineStockListRelationFilter
    MedicinePurchess?: MedicinePurchessListRelationFilter
  }

  export type MedicineNameCategoryOrderByWithRelationInput = {
    id?: SortOrder
    genericName?: SortOrder
    medicineNameAdd?: MedicineNameAddOrderByRelationAggregateInput
    MedicineStock?: MedicineStockOrderByRelationAggregateInput
    MedicinePurchess?: MedicinePurchessOrderByRelationAggregateInput
  }

  export type MedicineNameCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    genericName?: string
    AND?: MedicineNameCategoryWhereInput | MedicineNameCategoryWhereInput[]
    OR?: MedicineNameCategoryWhereInput[]
    NOT?: MedicineNameCategoryWhereInput | MedicineNameCategoryWhereInput[]
    medicineNameAdd?: MedicineNameAddListRelationFilter
    MedicineStock?: MedicineStockListRelationFilter
    MedicinePurchess?: MedicinePurchessListRelationFilter
  }, "id" | "genericName">

  export type MedicineNameCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    genericName?: SortOrder
    _count?: MedicineNameCategoryCountOrderByAggregateInput
    _max?: MedicineNameCategoryMaxOrderByAggregateInput
    _min?: MedicineNameCategoryMinOrderByAggregateInput
  }

  export type MedicineNameCategoryScalarWhereWithAggregatesInput = {
    AND?: MedicineNameCategoryScalarWhereWithAggregatesInput | MedicineNameCategoryScalarWhereWithAggregatesInput[]
    OR?: MedicineNameCategoryScalarWhereWithAggregatesInput[]
    NOT?: MedicineNameCategoryScalarWhereWithAggregatesInput | MedicineNameCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicineNameCategory"> | string
    genericName?: StringWithAggregatesFilter<"MedicineNameCategory"> | string
  }

  export type MedicineNameAddWhereInput = {
    AND?: MedicineNameAddWhereInput | MedicineNameAddWhereInput[]
    OR?: MedicineNameAddWhereInput[]
    NOT?: MedicineNameAddWhereInput | MedicineNameAddWhereInput[]
    id?: StringFilter<"MedicineNameAdd"> | string
    name?: StringFilter<"MedicineNameAdd"> | string
    conpany?: StringFilter<"MedicineNameAdd"> | string
    genericName?: StringFilter<"MedicineNameAdd"> | string
    medicineCategory?: XOR<MedicineNameCategoryScalarRelationFilter, MedicineNameCategoryWhereInput>
    MedicineStock?: MedicineStockListRelationFilter
    MedicinePurchess?: MedicinePurchessListRelationFilter
  }

  export type MedicineNameAddOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    conpany?: SortOrder
    genericName?: SortOrder
    medicineCategory?: MedicineNameCategoryOrderByWithRelationInput
    MedicineStock?: MedicineStockOrderByRelationAggregateInput
    MedicinePurchess?: MedicinePurchessOrderByRelationAggregateInput
  }

  export type MedicineNameAddWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MedicineNameAddWhereInput | MedicineNameAddWhereInput[]
    OR?: MedicineNameAddWhereInput[]
    NOT?: MedicineNameAddWhereInput | MedicineNameAddWhereInput[]
    conpany?: StringFilter<"MedicineNameAdd"> | string
    genericName?: StringFilter<"MedicineNameAdd"> | string
    medicineCategory?: XOR<MedicineNameCategoryScalarRelationFilter, MedicineNameCategoryWhereInput>
    MedicineStock?: MedicineStockListRelationFilter
    MedicinePurchess?: MedicinePurchessListRelationFilter
  }, "id" | "name">

  export type MedicineNameAddOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    conpany?: SortOrder
    genericName?: SortOrder
    _count?: MedicineNameAddCountOrderByAggregateInput
    _max?: MedicineNameAddMaxOrderByAggregateInput
    _min?: MedicineNameAddMinOrderByAggregateInput
  }

  export type MedicineNameAddScalarWhereWithAggregatesInput = {
    AND?: MedicineNameAddScalarWhereWithAggregatesInput | MedicineNameAddScalarWhereWithAggregatesInput[]
    OR?: MedicineNameAddScalarWhereWithAggregatesInput[]
    NOT?: MedicineNameAddScalarWhereWithAggregatesInput | MedicineNameAddScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicineNameAdd"> | string
    name?: StringWithAggregatesFilter<"MedicineNameAdd"> | string
    conpany?: StringWithAggregatesFilter<"MedicineNameAdd"> | string
    genericName?: StringWithAggregatesFilter<"MedicineNameAdd"> | string
  }

  export type MedicinePurchessWhereInput = {
    AND?: MedicinePurchessWhereInput | MedicinePurchessWhereInput[]
    OR?: MedicinePurchessWhereInput[]
    NOT?: MedicinePurchessWhereInput | MedicinePurchessWhereInput[]
    id?: StringFilter<"MedicinePurchess"> | string
    genericName?: StringFilter<"MedicinePurchess"> | string
    name?: StringFilter<"MedicinePurchess"> | string
    purchaseUnitPrice?: IntFilter<"MedicinePurchess"> | number
    sellUnitPrice?: IntFilter<"MedicinePurchess"> | number
    purchaseQuantity?: IntFilter<"MedicinePurchess"> | number
    mfgDate?: StringFilter<"MedicinePurchess"> | string
    expDate?: StringFilter<"MedicinePurchess"> | string
    bonusQuantity?: IntNullableFilter<"MedicinePurchess"> | number | null
    purchaseTotalPrice?: IntFilter<"MedicinePurchess"> | number
    supplierInfo?: StringFilter<"MedicinePurchess"> | string
    branchCode?: StringFilter<"MedicinePurchess"> | string
    medicineCategory?: XOR<MedicineNameCategoryScalarRelationFilter, MedicineNameCategoryWhereInput>
    medicineNameAdd?: XOR<MedicineNameAddScalarRelationFilter, MedicineNameAddWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }

  export type MedicinePurchessOrderByWithRelationInput = {
    id?: SortOrder
    genericName?: SortOrder
    name?: SortOrder
    purchaseUnitPrice?: SortOrder
    sellUnitPrice?: SortOrder
    purchaseQuantity?: SortOrder
    mfgDate?: SortOrder
    expDate?: SortOrder
    bonusQuantity?: SortOrderInput | SortOrder
    purchaseTotalPrice?: SortOrder
    supplierInfo?: SortOrder
    branchCode?: SortOrder
    medicineCategory?: MedicineNameCategoryOrderByWithRelationInput
    medicineNameAdd?: MedicineNameAddOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
  }

  export type MedicinePurchessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicinePurchessWhereInput | MedicinePurchessWhereInput[]
    OR?: MedicinePurchessWhereInput[]
    NOT?: MedicinePurchessWhereInput | MedicinePurchessWhereInput[]
    genericName?: StringFilter<"MedicinePurchess"> | string
    name?: StringFilter<"MedicinePurchess"> | string
    purchaseUnitPrice?: IntFilter<"MedicinePurchess"> | number
    sellUnitPrice?: IntFilter<"MedicinePurchess"> | number
    purchaseQuantity?: IntFilter<"MedicinePurchess"> | number
    mfgDate?: StringFilter<"MedicinePurchess"> | string
    expDate?: StringFilter<"MedicinePurchess"> | string
    bonusQuantity?: IntNullableFilter<"MedicinePurchess"> | number | null
    purchaseTotalPrice?: IntFilter<"MedicinePurchess"> | number
    supplierInfo?: StringFilter<"MedicinePurchess"> | string
    branchCode?: StringFilter<"MedicinePurchess"> | string
    medicineCategory?: XOR<MedicineNameCategoryScalarRelationFilter, MedicineNameCategoryWhereInput>
    medicineNameAdd?: XOR<MedicineNameAddScalarRelationFilter, MedicineNameAddWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }, "id">

  export type MedicinePurchessOrderByWithAggregationInput = {
    id?: SortOrder
    genericName?: SortOrder
    name?: SortOrder
    purchaseUnitPrice?: SortOrder
    sellUnitPrice?: SortOrder
    purchaseQuantity?: SortOrder
    mfgDate?: SortOrder
    expDate?: SortOrder
    bonusQuantity?: SortOrderInput | SortOrder
    purchaseTotalPrice?: SortOrder
    supplierInfo?: SortOrder
    branchCode?: SortOrder
    _count?: MedicinePurchessCountOrderByAggregateInput
    _avg?: MedicinePurchessAvgOrderByAggregateInput
    _max?: MedicinePurchessMaxOrderByAggregateInput
    _min?: MedicinePurchessMinOrderByAggregateInput
    _sum?: MedicinePurchessSumOrderByAggregateInput
  }

  export type MedicinePurchessScalarWhereWithAggregatesInput = {
    AND?: MedicinePurchessScalarWhereWithAggregatesInput | MedicinePurchessScalarWhereWithAggregatesInput[]
    OR?: MedicinePurchessScalarWhereWithAggregatesInput[]
    NOT?: MedicinePurchessScalarWhereWithAggregatesInput | MedicinePurchessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicinePurchess"> | string
    genericName?: StringWithAggregatesFilter<"MedicinePurchess"> | string
    name?: StringWithAggregatesFilter<"MedicinePurchess"> | string
    purchaseUnitPrice?: IntWithAggregatesFilter<"MedicinePurchess"> | number
    sellUnitPrice?: IntWithAggregatesFilter<"MedicinePurchess"> | number
    purchaseQuantity?: IntWithAggregatesFilter<"MedicinePurchess"> | number
    mfgDate?: StringWithAggregatesFilter<"MedicinePurchess"> | string
    expDate?: StringWithAggregatesFilter<"MedicinePurchess"> | string
    bonusQuantity?: IntNullableWithAggregatesFilter<"MedicinePurchess"> | number | null
    purchaseTotalPrice?: IntWithAggregatesFilter<"MedicinePurchess"> | number
    supplierInfo?: StringWithAggregatesFilter<"MedicinePurchess"> | string
    branchCode?: StringWithAggregatesFilter<"MedicinePurchess"> | string
  }

  export type MedicineStockWhereInput = {
    AND?: MedicineStockWhereInput | MedicineStockWhereInput[]
    OR?: MedicineStockWhereInput[]
    NOT?: MedicineStockWhereInput | MedicineStockWhereInput[]
    id?: StringFilter<"MedicineStock"> | string
    genericName?: StringFilter<"MedicineStock"> | string
    medicineName?: StringFilter<"MedicineStock"> | string
    branchCode?: StringFilter<"MedicineStock"> | string
    totalStock?: IntFilter<"MedicineStock"> | number
    price?: IntFilter<"MedicineStock"> | number
    medicineNameAdd?: XOR<MedicineNameAddScalarRelationFilter, MedicineNameAddWhereInput>
    medicineCategory?: XOR<MedicineNameCategoryScalarRelationFilter, MedicineNameCategoryWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }

  export type MedicineStockOrderByWithRelationInput = {
    id?: SortOrder
    genericName?: SortOrder
    medicineName?: SortOrder
    branchCode?: SortOrder
    totalStock?: SortOrder
    price?: SortOrder
    medicineNameAdd?: MedicineNameAddOrderByWithRelationInput
    medicineCategory?: MedicineNameCategoryOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
  }

  export type MedicineStockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    genericName?: string
    medicineName?: string
    genericName_medicineName?: MedicineStockGenericNameMedicineNameCompoundUniqueInput
    AND?: MedicineStockWhereInput | MedicineStockWhereInput[]
    OR?: MedicineStockWhereInput[]
    NOT?: MedicineStockWhereInput | MedicineStockWhereInput[]
    branchCode?: StringFilter<"MedicineStock"> | string
    totalStock?: IntFilter<"MedicineStock"> | number
    price?: IntFilter<"MedicineStock"> | number
    medicineNameAdd?: XOR<MedicineNameAddScalarRelationFilter, MedicineNameAddWhereInput>
    medicineCategory?: XOR<MedicineNameCategoryScalarRelationFilter, MedicineNameCategoryWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }, "id" | "genericName" | "medicineName" | "genericName_medicineName">

  export type MedicineStockOrderByWithAggregationInput = {
    id?: SortOrder
    genericName?: SortOrder
    medicineName?: SortOrder
    branchCode?: SortOrder
    totalStock?: SortOrder
    price?: SortOrder
    _count?: MedicineStockCountOrderByAggregateInput
    _avg?: MedicineStockAvgOrderByAggregateInput
    _max?: MedicineStockMaxOrderByAggregateInput
    _min?: MedicineStockMinOrderByAggregateInput
    _sum?: MedicineStockSumOrderByAggregateInput
  }

  export type MedicineStockScalarWhereWithAggregatesInput = {
    AND?: MedicineStockScalarWhereWithAggregatesInput | MedicineStockScalarWhereWithAggregatesInput[]
    OR?: MedicineStockScalarWhereWithAggregatesInput[]
    NOT?: MedicineStockScalarWhereWithAggregatesInput | MedicineStockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicineStock"> | string
    genericName?: StringWithAggregatesFilter<"MedicineStock"> | string
    medicineName?: StringWithAggregatesFilter<"MedicineStock"> | string
    branchCode?: StringWithAggregatesFilter<"MedicineStock"> | string
    totalStock?: IntWithAggregatesFilter<"MedicineStock"> | number
    price?: IntWithAggregatesFilter<"MedicineStock"> | number
  }

  export type BranchCreateInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerCreateNestedManyWithoutBranchInput
    employees?: EmployeeCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeCreateNestedManyWithoutBranchInput
    flocks?: FlockCreateNestedManyWithoutBranchInput
    Feed?: FeedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerUncheckedCreateNestedManyWithoutBranchInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeUncheckedCreateNestedManyWithoutBranchInput
    flocks?: FlockUncheckedCreateNestedManyWithoutBranchInput
    Feed?: FeedUncheckedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUpdateManyWithoutBranchNestedInput
    flocks?: FlockUpdateManyWithoutBranchNestedInput
    Feed?: FeedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUncheckedUpdateManyWithoutBranchNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutBranchNestedInput
    Feed?: FeedUncheckedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    id?: string
    farmCode: string
    name: string
    farmType: $Enums.Custtype
    totalShed: number
    totalSquare: number
    capacity: number
    nid: string
    branch: BranchCreateNestedOneWithoutCustomersInput
    address?: AddressCreateNestedOneWithoutCustomerInput
    flocks?: FlockCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    branchCode: string
    farmCode: string
    name: string
    farmType: $Enums.Custtype
    totalShed: number
    totalSquare: number
    capacity: number
    nid: string
    address?: AddressUncheckedCreateNestedOneWithoutCustomerInput
    flocks?: FlockUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    farmType?: EnumCusttypeFieldUpdateOperationsInput | $Enums.Custtype
    totalShed?: IntFieldUpdateOperationsInput | number
    totalSquare?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nid?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneRequiredWithoutCustomersNestedInput
    address?: AddressUpdateOneWithoutCustomerNestedInput
    flocks?: FlockUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    farmType?: EnumCusttypeFieldUpdateOperationsInput | $Enums.Custtype
    totalShed?: IntFieldUpdateOperationsInput | number
    totalSquare?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nid?: StringFieldUpdateOperationsInput | string
    address?: AddressUncheckedUpdateOneWithoutCustomerNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    branchCode: string
    farmCode: string
    name: string
    farmType: $Enums.Custtype
    totalShed: number
    totalSquare: number
    capacity: number
    nid: string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    farmType?: EnumCusttypeFieldUpdateOperationsInput | $Enums.Custtype
    totalShed?: IntFieldUpdateOperationsInput | number
    totalSquare?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nid?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    farmType?: EnumCusttypeFieldUpdateOperationsInput | $Enums.Custtype
    totalShed?: IntFieldUpdateOperationsInput | number
    totalSquare?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nid?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateInput = {
    id?: string
    village: string
    post: string
    union?: string | null
    thana?: string | null
    upazila: string
    phoneNumber: string
    city: string
    employee?: EmployeeCreateNestedOneWithoutAddressInput
    customer?: CustomerCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    village: string
    post: string
    union?: string | null
    thana?: string | null
    upazila: string
    phoneNumber: string
    city: string
    employeeId?: string | null
    farmCode?: string | null
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    post?: StringFieldUpdateOperationsInput | string
    union?: NullableStringFieldUpdateOperationsInput | string | null
    thana?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneWithoutAddressNestedInput
    customer?: CustomerUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    post?: StringFieldUpdateOperationsInput | string
    union?: NullableStringFieldUpdateOperationsInput | string | null
    thana?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    farmCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateManyInput = {
    id?: string
    village: string
    post: string
    union?: string | null
    thana?: string | null
    upazila: string
    phoneNumber: string
    city: string
    employeeId?: string | null
    farmCode?: string | null
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    post?: StringFieldUpdateOperationsInput | string
    union?: NullableStringFieldUpdateOperationsInput | string | null
    thana?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    post?: StringFieldUpdateOperationsInput | string
    union?: NullableStringFieldUpdateOperationsInput | string | null
    thana?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    farmCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BranchEmployeeCreateInput = {
    id?: string
    branch: BranchCreateNestedOneWithoutBranchEmployeesInput
    employee: EmployeeCreateNestedOneWithoutBranchEmployeesInput
  }

  export type BranchEmployeeUncheckedCreateInput = {
    id?: string
    employeeId: string
    branchCode: string
  }

  export type BranchEmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneRequiredWithoutBranchEmployeesNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutBranchEmployeesNestedInput
  }

  export type BranchEmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
  }

  export type BranchEmployeeCreateManyInput = {
    id?: string
    employeeId: string
    branchCode: string
  }

  export type BranchEmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type BranchEmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branch?: BranchCreateNestedOneWithoutEmployeesInput
    branchEmployees?: BranchEmployeeCreateNestedManyWithoutEmployeeInput
    address?: AddressCreateNestedOneWithoutEmployeeInput
    flocks?: FlockCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branchId?: string | null
    branchEmployees?: BranchEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    flocks?: FlockUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneWithoutEmployeesNestedInput
    branchEmployees?: BranchEmployeeUpdateManyWithoutEmployeeNestedInput
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    flocks?: FlockUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    branchEmployees?: BranchEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branchId?: string | null
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlockCreateInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
    customer: CustomerCreateNestedOneWithoutFlocksInput
    employee: EmployeeCreateNestedOneWithoutFlocksInput
    branch: BranchCreateNestedOneWithoutFlocksInput
  }

  export type FlockUncheckedCreateInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    executiveId: string
    farmCode: string
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    branchCode: string
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
  }

  export type FlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutFlocksNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutFlocksNestedInput
    branch?: BranchUpdateOneRequiredWithoutFlocksNestedInput
  }

  export type FlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executiveId?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    branchCode?: StringFieldUpdateOperationsInput | string
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
  }

  export type FlockCreateManyInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    executiveId: string
    farmCode: string
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    branchCode: string
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
  }

  export type FlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
  }

  export type FlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executiveId?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    branchCode?: StringFieldUpdateOperationsInput | string
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
  }

  export type FeedNameCategoryCreateInput = {
    id?: string
    feedName: string
    feedCodeNumber: number
    feeds?: FeedCreateNestedManyWithoutFeedNameCategoryInput
  }

  export type FeedNameCategoryUncheckedCreateInput = {
    id?: string
    feedName: string
    feedCodeNumber: number
    feeds?: FeedUncheckedCreateNestedManyWithoutFeedNameCategoryInput
  }

  export type FeedNameCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedName?: StringFieldUpdateOperationsInput | string
    feedCodeNumber?: IntFieldUpdateOperationsInput | number
    feeds?: FeedUpdateManyWithoutFeedNameCategoryNestedInput
  }

  export type FeedNameCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedName?: StringFieldUpdateOperationsInput | string
    feedCodeNumber?: IntFieldUpdateOperationsInput | number
    feeds?: FeedUncheckedUpdateManyWithoutFeedNameCategoryNestedInput
  }

  export type FeedNameCategoryCreateManyInput = {
    id?: string
    feedName: string
    feedCodeNumber: number
  }

  export type FeedNameCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedName?: StringFieldUpdateOperationsInput | string
    feedCodeNumber?: IntFieldUpdateOperationsInput | number
  }

  export type FeedNameCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedName?: StringFieldUpdateOperationsInput | string
    feedCodeNumber?: IntFieldUpdateOperationsInput | number
  }

  export type FeedCreateInput = {
    id?: string
    stock: number
    feedNameCategory: FeedNameCategoryCreateNestedOneWithoutFeedsInput
    branch?: BranchCreateNestedOneWithoutFeedInput
  }

  export type FeedUncheckedCreateInput = {
    id?: string
    feedName: string
    stock: number
    branchCode?: string | null
  }

  export type FeedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    feedNameCategory?: FeedNameCategoryUpdateOneRequiredWithoutFeedsNestedInput
    branch?: BranchUpdateOneWithoutFeedNestedInput
  }

  export type FeedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    branchCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedCreateManyInput = {
    id?: string
    feedName: string
    stock: number
    branchCode?: string | null
  }

  export type FeedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type FeedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    branchCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicineNameCategoryCreateInput = {
    id?: string
    genericName: string
    medicineNameAdd?: MedicineNameAddCreateNestedManyWithoutMedicineCategoryInput
    MedicineStock?: MedicineStockCreateNestedManyWithoutMedicineCategoryInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutMedicineCategoryInput
  }

  export type MedicineNameCategoryUncheckedCreateInput = {
    id?: string
    genericName: string
    medicineNameAdd?: MedicineNameAddUncheckedCreateNestedManyWithoutMedicineCategoryInput
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutMedicineCategoryInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutMedicineCategoryInput
  }

  export type MedicineNameCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    medicineNameAdd?: MedicineNameAddUpdateManyWithoutMedicineCategoryNestedInput
    MedicineStock?: MedicineStockUpdateManyWithoutMedicineCategoryNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutMedicineCategoryNestedInput
  }

  export type MedicineNameCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    medicineNameAdd?: MedicineNameAddUncheckedUpdateManyWithoutMedicineCategoryNestedInput
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutMedicineCategoryNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutMedicineCategoryNestedInput
  }

  export type MedicineNameCategoryCreateManyInput = {
    id?: string
    genericName: string
  }

  export type MedicineNameCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineNameCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineNameAddCreateInput = {
    id?: string
    name: string
    conpany: string
    medicineCategory: MedicineNameCategoryCreateNestedOneWithoutMedicineNameAddInput
    MedicineStock?: MedicineStockCreateNestedManyWithoutMedicineNameAddInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutMedicineNameAddInput
  }

  export type MedicineNameAddUncheckedCreateInput = {
    id?: string
    name: string
    conpany: string
    genericName: string
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutMedicineNameAddInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutMedicineNameAddInput
  }

  export type MedicineNameAddUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    conpany?: StringFieldUpdateOperationsInput | string
    medicineCategory?: MedicineNameCategoryUpdateOneRequiredWithoutMedicineNameAddNestedInput
    MedicineStock?: MedicineStockUpdateManyWithoutMedicineNameAddNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutMedicineNameAddNestedInput
  }

  export type MedicineNameAddUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    conpany?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutMedicineNameAddNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutMedicineNameAddNestedInput
  }

  export type MedicineNameAddCreateManyInput = {
    id?: string
    name: string
    conpany: string
    genericName: string
  }

  export type MedicineNameAddUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    conpany?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineNameAddUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    conpany?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
  }

  export type MedicinePurchessCreateInput = {
    id?: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
    medicineCategory: MedicineNameCategoryCreateNestedOneWithoutMedicinePurchessInput
    medicineNameAdd: MedicineNameAddCreateNestedOneWithoutMedicinePurchessInput
    branch: BranchCreateNestedOneWithoutMedicinePurchessInput
  }

  export type MedicinePurchessUncheckedCreateInput = {
    id?: string
    genericName: string
    name: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
    branchCode: string
  }

  export type MedicinePurchessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
    medicineCategory?: MedicineNameCategoryUpdateOneRequiredWithoutMedicinePurchessNestedInput
    medicineNameAdd?: MedicineNameAddUpdateOneRequiredWithoutMedicinePurchessNestedInput
    branch?: BranchUpdateOneRequiredWithoutMedicinePurchessNestedInput
  }

  export type MedicinePurchessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
  }

  export type MedicinePurchessCreateManyInput = {
    id?: string
    genericName: string
    name: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
    branchCode: string
  }

  export type MedicinePurchessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
  }

  export type MedicinePurchessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineStockCreateInput = {
    id?: string
    totalStock: number
    price: number
    medicineNameAdd: MedicineNameAddCreateNestedOneWithoutMedicineStockInput
    medicineCategory: MedicineNameCategoryCreateNestedOneWithoutMedicineStockInput
    branch: BranchCreateNestedOneWithoutMedicineStockInput
  }

  export type MedicineStockUncheckedCreateInput = {
    id?: string
    genericName: string
    medicineName: string
    branchCode: string
    totalStock: number
    price: number
  }

  export type MedicineStockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    medicineNameAdd?: MedicineNameAddUpdateOneRequiredWithoutMedicineStockNestedInput
    medicineCategory?: MedicineNameCategoryUpdateOneRequiredWithoutMedicineStockNestedInput
    branch?: BranchUpdateOneRequiredWithoutMedicineStockNestedInput
  }

  export type MedicineStockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineStockCreateManyInput = {
    id?: string
    genericName: string
    medicineName: string
    branchCode: string
    totalStock: number
    price: number
  }

  export type MedicineStockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineStockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumBranchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchType | EnumBranchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchTypeFilter<$PrismaModel> | $Enums.BranchType
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type BranchEmployeeListRelationFilter = {
    every?: BranchEmployeeWhereInput
    some?: BranchEmployeeWhereInput
    none?: BranchEmployeeWhereInput
  }

  export type FlockListRelationFilter = {
    every?: FlockWhereInput
    some?: FlockWhereInput
    none?: FlockWhereInput
  }

  export type FeedListRelationFilter = {
    every?: FeedWhereInput
    some?: FeedWhereInput
    none?: FeedWhereInput
  }

  export type MedicineStockListRelationFilter = {
    every?: MedicineStockWhereInput
    some?: MedicineStockWhereInput
    none?: MedicineStockWhereInput
  }

  export type MedicinePurchessListRelationFilter = {
    every?: MedicinePurchessWhereInput
    some?: MedicinePurchessWhereInput
    none?: MedicinePurchessWhereInput
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchEmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicineStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicinePurchessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    locationName?: SortOrder
    type?: SortOrder
    branchCode?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    locationName?: SortOrder
    type?: SortOrder
    branchCode?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    locationName?: SortOrder
    type?: SortOrder
    branchCode?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumBranchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchType | EnumBranchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchTypeWithAggregatesFilter<$PrismaModel> | $Enums.BranchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBranchTypeFilter<$PrismaModel>
    _max?: NestedEnumBranchTypeFilter<$PrismaModel>
  }

  export type EnumCusttypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Custtype | EnumCusttypeFieldRefInput<$PrismaModel>
    in?: $Enums.Custtype[] | ListEnumCusttypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Custtype[] | ListEnumCusttypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCusttypeFilter<$PrismaModel> | $Enums.Custtype
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BranchScalarRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    branchCode?: SortOrder
    farmCode?: SortOrder
    name?: SortOrder
    farmType?: SortOrder
    totalShed?: SortOrder
    totalSquare?: SortOrder
    capacity?: SortOrder
    nid?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    totalShed?: SortOrder
    totalSquare?: SortOrder
    capacity?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    branchCode?: SortOrder
    farmCode?: SortOrder
    name?: SortOrder
    farmType?: SortOrder
    totalShed?: SortOrder
    totalSquare?: SortOrder
    capacity?: SortOrder
    nid?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    branchCode?: SortOrder
    farmCode?: SortOrder
    name?: SortOrder
    farmType?: SortOrder
    totalShed?: SortOrder
    totalSquare?: SortOrder
    capacity?: SortOrder
    nid?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    totalShed?: SortOrder
    totalSquare?: SortOrder
    capacity?: SortOrder
  }

  export type EnumCusttypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Custtype | EnumCusttypeFieldRefInput<$PrismaModel>
    in?: $Enums.Custtype[] | ListEnumCusttypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Custtype[] | ListEnumCusttypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCusttypeWithAggregatesFilter<$PrismaModel> | $Enums.Custtype
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCusttypeFilter<$PrismaModel>
    _max?: NestedEnumCusttypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    village?: SortOrder
    post?: SortOrder
    union?: SortOrder
    thana?: SortOrder
    upazila?: SortOrder
    phoneNumber?: SortOrder
    city?: SortOrder
    employeeId?: SortOrder
    farmCode?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    village?: SortOrder
    post?: SortOrder
    union?: SortOrder
    thana?: SortOrder
    upazila?: SortOrder
    phoneNumber?: SortOrder
    city?: SortOrder
    employeeId?: SortOrder
    farmCode?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    village?: SortOrder
    post?: SortOrder
    union?: SortOrder
    thana?: SortOrder
    upazila?: SortOrder
    phoneNumber?: SortOrder
    city?: SortOrder
    employeeId?: SortOrder
    farmCode?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type BranchEmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    branchCode?: SortOrder
  }

  export type BranchEmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    branchCode?: SortOrder
  }

  export type BranchEmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    branchCode?: SortOrder
  }

  export type BranchNullableScalarRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    workingLocation?: SortOrder
    designation?: SortOrder
    branchId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    workingLocation?: SortOrder
    designation?: SortOrder
    branchId?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    workingLocation?: SortOrder
    designation?: SortOrder
    branchId?: SortOrder
  }

  export type EnumFlockStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlockStatus | EnumFlockStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlockStatus[] | ListEnumFlockStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlockStatus[] | ListEnumFlockStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlockStatusFilter<$PrismaModel> | $Enums.FlockStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type FlockCountOrderByAggregateInput = {
    id?: SortOrder
    flockNumber?: SortOrder
    flockStatus?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    executiveId?: SortOrder
    farmCode?: SortOrder
    docName?: SortOrder
    docQuantity?: SortOrder
    approvedBy?: SortOrder
    branchCode?: SortOrder
    totalFeedKg?: SortOrder
    totalMedicine?: SortOrder
    fcr?: SortOrder
    totalSellBirds?: SortOrder
    mortality?: SortOrder
  }

  export type FlockAvgOrderByAggregateInput = {
    flockNumber?: SortOrder
    docQuantity?: SortOrder
    totalFeedKg?: SortOrder
    totalMedicine?: SortOrder
    fcr?: SortOrder
    totalSellBirds?: SortOrder
    mortality?: SortOrder
  }

  export type FlockMaxOrderByAggregateInput = {
    id?: SortOrder
    flockNumber?: SortOrder
    flockStatus?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    executiveId?: SortOrder
    farmCode?: SortOrder
    docName?: SortOrder
    docQuantity?: SortOrder
    approvedBy?: SortOrder
    branchCode?: SortOrder
    totalFeedKg?: SortOrder
    totalMedicine?: SortOrder
    fcr?: SortOrder
    totalSellBirds?: SortOrder
    mortality?: SortOrder
  }

  export type FlockMinOrderByAggregateInput = {
    id?: SortOrder
    flockNumber?: SortOrder
    flockStatus?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    executiveId?: SortOrder
    farmCode?: SortOrder
    docName?: SortOrder
    docQuantity?: SortOrder
    approvedBy?: SortOrder
    branchCode?: SortOrder
    totalFeedKg?: SortOrder
    totalMedicine?: SortOrder
    fcr?: SortOrder
    totalSellBirds?: SortOrder
    mortality?: SortOrder
  }

  export type FlockSumOrderByAggregateInput = {
    flockNumber?: SortOrder
    docQuantity?: SortOrder
    totalFeedKg?: SortOrder
    totalMedicine?: SortOrder
    fcr?: SortOrder
    totalSellBirds?: SortOrder
    mortality?: SortOrder
  }

  export type EnumFlockStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlockStatus | EnumFlockStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlockStatus[] | ListEnumFlockStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlockStatus[] | ListEnumFlockStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlockStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlockStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlockStatusFilter<$PrismaModel>
    _max?: NestedEnumFlockStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FeedNameCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    feedName?: SortOrder
    feedCodeNumber?: SortOrder
  }

  export type FeedNameCategoryAvgOrderByAggregateInput = {
    feedCodeNumber?: SortOrder
  }

  export type FeedNameCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    feedName?: SortOrder
    feedCodeNumber?: SortOrder
  }

  export type FeedNameCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    feedName?: SortOrder
    feedCodeNumber?: SortOrder
  }

  export type FeedNameCategorySumOrderByAggregateInput = {
    feedCodeNumber?: SortOrder
  }

  export type FeedNameCategoryScalarRelationFilter = {
    is?: FeedNameCategoryWhereInput
    isNot?: FeedNameCategoryWhereInput
  }

  export type FeedCountOrderByAggregateInput = {
    id?: SortOrder
    feedName?: SortOrder
    stock?: SortOrder
    branchCode?: SortOrder
  }

  export type FeedAvgOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type FeedMaxOrderByAggregateInput = {
    id?: SortOrder
    feedName?: SortOrder
    stock?: SortOrder
    branchCode?: SortOrder
  }

  export type FeedMinOrderByAggregateInput = {
    id?: SortOrder
    feedName?: SortOrder
    stock?: SortOrder
    branchCode?: SortOrder
  }

  export type FeedSumOrderByAggregateInput = {
    stock?: SortOrder
  }

  export type MedicineNameAddListRelationFilter = {
    every?: MedicineNameAddWhereInput
    some?: MedicineNameAddWhereInput
    none?: MedicineNameAddWhereInput
  }

  export type MedicineNameAddOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicineNameCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
  }

  export type MedicineNameCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
  }

  export type MedicineNameCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
  }

  export type MedicineNameCategoryScalarRelationFilter = {
    is?: MedicineNameCategoryWhereInput
    isNot?: MedicineNameCategoryWhereInput
  }

  export type MedicineNameAddCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    conpany?: SortOrder
    genericName?: SortOrder
  }

  export type MedicineNameAddMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    conpany?: SortOrder
    genericName?: SortOrder
  }

  export type MedicineNameAddMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    conpany?: SortOrder
    genericName?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MedicineNameAddScalarRelationFilter = {
    is?: MedicineNameAddWhereInput
    isNot?: MedicineNameAddWhereInput
  }

  export type MedicinePurchessCountOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    name?: SortOrder
    purchaseUnitPrice?: SortOrder
    sellUnitPrice?: SortOrder
    purchaseQuantity?: SortOrder
    mfgDate?: SortOrder
    expDate?: SortOrder
    bonusQuantity?: SortOrder
    purchaseTotalPrice?: SortOrder
    supplierInfo?: SortOrder
    branchCode?: SortOrder
  }

  export type MedicinePurchessAvgOrderByAggregateInput = {
    purchaseUnitPrice?: SortOrder
    sellUnitPrice?: SortOrder
    purchaseQuantity?: SortOrder
    bonusQuantity?: SortOrder
    purchaseTotalPrice?: SortOrder
  }

  export type MedicinePurchessMaxOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    name?: SortOrder
    purchaseUnitPrice?: SortOrder
    sellUnitPrice?: SortOrder
    purchaseQuantity?: SortOrder
    mfgDate?: SortOrder
    expDate?: SortOrder
    bonusQuantity?: SortOrder
    purchaseTotalPrice?: SortOrder
    supplierInfo?: SortOrder
    branchCode?: SortOrder
  }

  export type MedicinePurchessMinOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    name?: SortOrder
    purchaseUnitPrice?: SortOrder
    sellUnitPrice?: SortOrder
    purchaseQuantity?: SortOrder
    mfgDate?: SortOrder
    expDate?: SortOrder
    bonusQuantity?: SortOrder
    purchaseTotalPrice?: SortOrder
    supplierInfo?: SortOrder
    branchCode?: SortOrder
  }

  export type MedicinePurchessSumOrderByAggregateInput = {
    purchaseUnitPrice?: SortOrder
    sellUnitPrice?: SortOrder
    purchaseQuantity?: SortOrder
    bonusQuantity?: SortOrder
    purchaseTotalPrice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MedicineStockGenericNameMedicineNameCompoundUniqueInput = {
    genericName: string
    medicineName: string
  }

  export type MedicineStockCountOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    medicineName?: SortOrder
    branchCode?: SortOrder
    totalStock?: SortOrder
    price?: SortOrder
  }

  export type MedicineStockAvgOrderByAggregateInput = {
    totalStock?: SortOrder
    price?: SortOrder
  }

  export type MedicineStockMaxOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    medicineName?: SortOrder
    branchCode?: SortOrder
    totalStock?: SortOrder
    price?: SortOrder
  }

  export type MedicineStockMinOrderByAggregateInput = {
    id?: SortOrder
    genericName?: SortOrder
    medicineName?: SortOrder
    branchCode?: SortOrder
    totalStock?: SortOrder
    price?: SortOrder
  }

  export type MedicineStockSumOrderByAggregateInput = {
    totalStock?: SortOrder
    price?: SortOrder
  }

  export type CustomerCreateNestedManyWithoutBranchInput = {
    create?: XOR<CustomerCreateWithoutBranchInput, CustomerUncheckedCreateWithoutBranchInput> | CustomerCreateWithoutBranchInput[] | CustomerUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutBranchInput | CustomerCreateOrConnectWithoutBranchInput[]
    createMany?: CustomerCreateManyBranchInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutBranchInput = {
    create?: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput> | EmployeeCreateWithoutBranchInput[] | EmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutBranchInput | EmployeeCreateOrConnectWithoutBranchInput[]
    createMany?: EmployeeCreateManyBranchInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type BranchEmployeeCreateNestedManyWithoutBranchInput = {
    create?: XOR<BranchEmployeeCreateWithoutBranchInput, BranchEmployeeUncheckedCreateWithoutBranchInput> | BranchEmployeeCreateWithoutBranchInput[] | BranchEmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchEmployeeCreateOrConnectWithoutBranchInput | BranchEmployeeCreateOrConnectWithoutBranchInput[]
    createMany?: BranchEmployeeCreateManyBranchInputEnvelope
    connect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
  }

  export type FlockCreateNestedManyWithoutBranchInput = {
    create?: XOR<FlockCreateWithoutBranchInput, FlockUncheckedCreateWithoutBranchInput> | FlockCreateWithoutBranchInput[] | FlockUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutBranchInput | FlockCreateOrConnectWithoutBranchInput[]
    createMany?: FlockCreateManyBranchInputEnvelope
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
  }

  export type FeedCreateNestedManyWithoutBranchInput = {
    create?: XOR<FeedCreateWithoutBranchInput, FeedUncheckedCreateWithoutBranchInput> | FeedCreateWithoutBranchInput[] | FeedUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutBranchInput | FeedCreateOrConnectWithoutBranchInput[]
    createMany?: FeedCreateManyBranchInputEnvelope
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
  }

  export type MedicineStockCreateNestedManyWithoutBranchInput = {
    create?: XOR<MedicineStockCreateWithoutBranchInput, MedicineStockUncheckedCreateWithoutBranchInput> | MedicineStockCreateWithoutBranchInput[] | MedicineStockUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutBranchInput | MedicineStockCreateOrConnectWithoutBranchInput[]
    createMany?: MedicineStockCreateManyBranchInputEnvelope
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
  }

  export type MedicinePurchessCreateNestedManyWithoutBranchInput = {
    create?: XOR<MedicinePurchessCreateWithoutBranchInput, MedicinePurchessUncheckedCreateWithoutBranchInput> | MedicinePurchessCreateWithoutBranchInput[] | MedicinePurchessUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutBranchInput | MedicinePurchessCreateOrConnectWithoutBranchInput[]
    createMany?: MedicinePurchessCreateManyBranchInputEnvelope
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<CustomerCreateWithoutBranchInput, CustomerUncheckedCreateWithoutBranchInput> | CustomerCreateWithoutBranchInput[] | CustomerUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutBranchInput | CustomerCreateOrConnectWithoutBranchInput[]
    createMany?: CustomerCreateManyBranchInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput> | EmployeeCreateWithoutBranchInput[] | EmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutBranchInput | EmployeeCreateOrConnectWithoutBranchInput[]
    createMany?: EmployeeCreateManyBranchInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type BranchEmployeeUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<BranchEmployeeCreateWithoutBranchInput, BranchEmployeeUncheckedCreateWithoutBranchInput> | BranchEmployeeCreateWithoutBranchInput[] | BranchEmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchEmployeeCreateOrConnectWithoutBranchInput | BranchEmployeeCreateOrConnectWithoutBranchInput[]
    createMany?: BranchEmployeeCreateManyBranchInputEnvelope
    connect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
  }

  export type FlockUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<FlockCreateWithoutBranchInput, FlockUncheckedCreateWithoutBranchInput> | FlockCreateWithoutBranchInput[] | FlockUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutBranchInput | FlockCreateOrConnectWithoutBranchInput[]
    createMany?: FlockCreateManyBranchInputEnvelope
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
  }

  export type FeedUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<FeedCreateWithoutBranchInput, FeedUncheckedCreateWithoutBranchInput> | FeedCreateWithoutBranchInput[] | FeedUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutBranchInput | FeedCreateOrConnectWithoutBranchInput[]
    createMany?: FeedCreateManyBranchInputEnvelope
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
  }

  export type MedicineStockUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<MedicineStockCreateWithoutBranchInput, MedicineStockUncheckedCreateWithoutBranchInput> | MedicineStockCreateWithoutBranchInput[] | MedicineStockUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutBranchInput | MedicineStockCreateOrConnectWithoutBranchInput[]
    createMany?: MedicineStockCreateManyBranchInputEnvelope
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
  }

  export type MedicinePurchessUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<MedicinePurchessCreateWithoutBranchInput, MedicinePurchessUncheckedCreateWithoutBranchInput> | MedicinePurchessCreateWithoutBranchInput[] | MedicinePurchessUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutBranchInput | MedicinePurchessCreateOrConnectWithoutBranchInput[]
    createMany?: MedicinePurchessCreateManyBranchInputEnvelope
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumBranchTypeFieldUpdateOperationsInput = {
    set?: $Enums.BranchType
  }

  export type CustomerUpdateManyWithoutBranchNestedInput = {
    create?: XOR<CustomerCreateWithoutBranchInput, CustomerUncheckedCreateWithoutBranchInput> | CustomerCreateWithoutBranchInput[] | CustomerUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutBranchInput | CustomerCreateOrConnectWithoutBranchInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutBranchInput | CustomerUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: CustomerCreateManyBranchInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutBranchInput | CustomerUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutBranchInput | CustomerUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutBranchNestedInput = {
    create?: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput> | EmployeeCreateWithoutBranchInput[] | EmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutBranchInput | EmployeeCreateOrConnectWithoutBranchInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutBranchInput | EmployeeUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: EmployeeCreateManyBranchInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutBranchInput | EmployeeUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutBranchInput | EmployeeUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type BranchEmployeeUpdateManyWithoutBranchNestedInput = {
    create?: XOR<BranchEmployeeCreateWithoutBranchInput, BranchEmployeeUncheckedCreateWithoutBranchInput> | BranchEmployeeCreateWithoutBranchInput[] | BranchEmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchEmployeeCreateOrConnectWithoutBranchInput | BranchEmployeeCreateOrConnectWithoutBranchInput[]
    upsert?: BranchEmployeeUpsertWithWhereUniqueWithoutBranchInput | BranchEmployeeUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: BranchEmployeeCreateManyBranchInputEnvelope
    set?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    disconnect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    delete?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    connect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    update?: BranchEmployeeUpdateWithWhereUniqueWithoutBranchInput | BranchEmployeeUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: BranchEmployeeUpdateManyWithWhereWithoutBranchInput | BranchEmployeeUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: BranchEmployeeScalarWhereInput | BranchEmployeeScalarWhereInput[]
  }

  export type FlockUpdateManyWithoutBranchNestedInput = {
    create?: XOR<FlockCreateWithoutBranchInput, FlockUncheckedCreateWithoutBranchInput> | FlockCreateWithoutBranchInput[] | FlockUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutBranchInput | FlockCreateOrConnectWithoutBranchInput[]
    upsert?: FlockUpsertWithWhereUniqueWithoutBranchInput | FlockUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: FlockCreateManyBranchInputEnvelope
    set?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    disconnect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    delete?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    update?: FlockUpdateWithWhereUniqueWithoutBranchInput | FlockUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: FlockUpdateManyWithWhereWithoutBranchInput | FlockUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: FlockScalarWhereInput | FlockScalarWhereInput[]
  }

  export type FeedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<FeedCreateWithoutBranchInput, FeedUncheckedCreateWithoutBranchInput> | FeedCreateWithoutBranchInput[] | FeedUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutBranchInput | FeedCreateOrConnectWithoutBranchInput[]
    upsert?: FeedUpsertWithWhereUniqueWithoutBranchInput | FeedUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: FeedCreateManyBranchInputEnvelope
    set?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    disconnect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    delete?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    update?: FeedUpdateWithWhereUniqueWithoutBranchInput | FeedUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: FeedUpdateManyWithWhereWithoutBranchInput | FeedUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: FeedScalarWhereInput | FeedScalarWhereInput[]
  }

  export type MedicineStockUpdateManyWithoutBranchNestedInput = {
    create?: XOR<MedicineStockCreateWithoutBranchInput, MedicineStockUncheckedCreateWithoutBranchInput> | MedicineStockCreateWithoutBranchInput[] | MedicineStockUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutBranchInput | MedicineStockCreateOrConnectWithoutBranchInput[]
    upsert?: MedicineStockUpsertWithWhereUniqueWithoutBranchInput | MedicineStockUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: MedicineStockCreateManyBranchInputEnvelope
    set?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    disconnect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    delete?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    update?: MedicineStockUpdateWithWhereUniqueWithoutBranchInput | MedicineStockUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: MedicineStockUpdateManyWithWhereWithoutBranchInput | MedicineStockUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: MedicineStockScalarWhereInput | MedicineStockScalarWhereInput[]
  }

  export type MedicinePurchessUpdateManyWithoutBranchNestedInput = {
    create?: XOR<MedicinePurchessCreateWithoutBranchInput, MedicinePurchessUncheckedCreateWithoutBranchInput> | MedicinePurchessCreateWithoutBranchInput[] | MedicinePurchessUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutBranchInput | MedicinePurchessCreateOrConnectWithoutBranchInput[]
    upsert?: MedicinePurchessUpsertWithWhereUniqueWithoutBranchInput | MedicinePurchessUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: MedicinePurchessCreateManyBranchInputEnvelope
    set?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    disconnect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    delete?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    update?: MedicinePurchessUpdateWithWhereUniqueWithoutBranchInput | MedicinePurchessUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: MedicinePurchessUpdateManyWithWhereWithoutBranchInput | MedicinePurchessUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: MedicinePurchessScalarWhereInput | MedicinePurchessScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<CustomerCreateWithoutBranchInput, CustomerUncheckedCreateWithoutBranchInput> | CustomerCreateWithoutBranchInput[] | CustomerUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutBranchInput | CustomerCreateOrConnectWithoutBranchInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutBranchInput | CustomerUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: CustomerCreateManyBranchInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutBranchInput | CustomerUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutBranchInput | CustomerUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput> | EmployeeCreateWithoutBranchInput[] | EmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutBranchInput | EmployeeCreateOrConnectWithoutBranchInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutBranchInput | EmployeeUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: EmployeeCreateManyBranchInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutBranchInput | EmployeeUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutBranchInput | EmployeeUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type BranchEmployeeUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<BranchEmployeeCreateWithoutBranchInput, BranchEmployeeUncheckedCreateWithoutBranchInput> | BranchEmployeeCreateWithoutBranchInput[] | BranchEmployeeUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchEmployeeCreateOrConnectWithoutBranchInput | BranchEmployeeCreateOrConnectWithoutBranchInput[]
    upsert?: BranchEmployeeUpsertWithWhereUniqueWithoutBranchInput | BranchEmployeeUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: BranchEmployeeCreateManyBranchInputEnvelope
    set?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    disconnect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    delete?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    connect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    update?: BranchEmployeeUpdateWithWhereUniqueWithoutBranchInput | BranchEmployeeUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: BranchEmployeeUpdateManyWithWhereWithoutBranchInput | BranchEmployeeUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: BranchEmployeeScalarWhereInput | BranchEmployeeScalarWhereInput[]
  }

  export type FlockUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<FlockCreateWithoutBranchInput, FlockUncheckedCreateWithoutBranchInput> | FlockCreateWithoutBranchInput[] | FlockUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutBranchInput | FlockCreateOrConnectWithoutBranchInput[]
    upsert?: FlockUpsertWithWhereUniqueWithoutBranchInput | FlockUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: FlockCreateManyBranchInputEnvelope
    set?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    disconnect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    delete?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    update?: FlockUpdateWithWhereUniqueWithoutBranchInput | FlockUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: FlockUpdateManyWithWhereWithoutBranchInput | FlockUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: FlockScalarWhereInput | FlockScalarWhereInput[]
  }

  export type FeedUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<FeedCreateWithoutBranchInput, FeedUncheckedCreateWithoutBranchInput> | FeedCreateWithoutBranchInput[] | FeedUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutBranchInput | FeedCreateOrConnectWithoutBranchInput[]
    upsert?: FeedUpsertWithWhereUniqueWithoutBranchInput | FeedUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: FeedCreateManyBranchInputEnvelope
    set?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    disconnect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    delete?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    update?: FeedUpdateWithWhereUniqueWithoutBranchInput | FeedUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: FeedUpdateManyWithWhereWithoutBranchInput | FeedUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: FeedScalarWhereInput | FeedScalarWhereInput[]
  }

  export type MedicineStockUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<MedicineStockCreateWithoutBranchInput, MedicineStockUncheckedCreateWithoutBranchInput> | MedicineStockCreateWithoutBranchInput[] | MedicineStockUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutBranchInput | MedicineStockCreateOrConnectWithoutBranchInput[]
    upsert?: MedicineStockUpsertWithWhereUniqueWithoutBranchInput | MedicineStockUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: MedicineStockCreateManyBranchInputEnvelope
    set?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    disconnect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    delete?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    update?: MedicineStockUpdateWithWhereUniqueWithoutBranchInput | MedicineStockUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: MedicineStockUpdateManyWithWhereWithoutBranchInput | MedicineStockUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: MedicineStockScalarWhereInput | MedicineStockScalarWhereInput[]
  }

  export type MedicinePurchessUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<MedicinePurchessCreateWithoutBranchInput, MedicinePurchessUncheckedCreateWithoutBranchInput> | MedicinePurchessCreateWithoutBranchInput[] | MedicinePurchessUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutBranchInput | MedicinePurchessCreateOrConnectWithoutBranchInput[]
    upsert?: MedicinePurchessUpsertWithWhereUniqueWithoutBranchInput | MedicinePurchessUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: MedicinePurchessCreateManyBranchInputEnvelope
    set?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    disconnect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    delete?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    update?: MedicinePurchessUpdateWithWhereUniqueWithoutBranchInput | MedicinePurchessUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: MedicinePurchessUpdateManyWithWhereWithoutBranchInput | MedicinePurchessUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: MedicinePurchessScalarWhereInput | MedicinePurchessScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutCustomersInput = {
    create?: XOR<BranchCreateWithoutCustomersInput, BranchUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutCustomersInput
    connect?: BranchWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput
    connect?: AddressWhereUniqueInput
  }

  export type FlockCreateNestedManyWithoutCustomerInput = {
    create?: XOR<FlockCreateWithoutCustomerInput, FlockUncheckedCreateWithoutCustomerInput> | FlockCreateWithoutCustomerInput[] | FlockUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutCustomerInput | FlockCreateOrConnectWithoutCustomerInput[]
    createMany?: FlockCreateManyCustomerInputEnvelope
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput
    connect?: AddressWhereUniqueInput
  }

  export type FlockUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<FlockCreateWithoutCustomerInput, FlockUncheckedCreateWithoutCustomerInput> | FlockCreateWithoutCustomerInput[] | FlockUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutCustomerInput | FlockCreateOrConnectWithoutCustomerInput[]
    createMany?: FlockCreateManyCustomerInputEnvelope
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
  }

  export type EnumCusttypeFieldUpdateOperationsInput = {
    set?: $Enums.Custtype
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BranchUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<BranchCreateWithoutCustomersInput, BranchUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutCustomersInput
    upsert?: BranchUpsertWithoutCustomersInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutCustomersInput, BranchUpdateWithoutCustomersInput>, BranchUncheckedUpdateWithoutCustomersInput>
  }

  export type AddressUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput
    upsert?: AddressUpsertWithoutCustomerInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutCustomerInput, AddressUpdateWithoutCustomerInput>, AddressUncheckedUpdateWithoutCustomerInput>
  }

  export type FlockUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<FlockCreateWithoutCustomerInput, FlockUncheckedCreateWithoutCustomerInput> | FlockCreateWithoutCustomerInput[] | FlockUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutCustomerInput | FlockCreateOrConnectWithoutCustomerInput[]
    upsert?: FlockUpsertWithWhereUniqueWithoutCustomerInput | FlockUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: FlockCreateManyCustomerInputEnvelope
    set?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    disconnect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    delete?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    update?: FlockUpdateWithWhereUniqueWithoutCustomerInput | FlockUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: FlockUpdateManyWithWhereWithoutCustomerInput | FlockUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: FlockScalarWhereInput | FlockScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput
    upsert?: AddressUpsertWithoutCustomerInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutCustomerInput, AddressUpdateWithoutCustomerInput>, AddressUncheckedUpdateWithoutCustomerInput>
  }

  export type FlockUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<FlockCreateWithoutCustomerInput, FlockUncheckedCreateWithoutCustomerInput> | FlockCreateWithoutCustomerInput[] | FlockUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutCustomerInput | FlockCreateOrConnectWithoutCustomerInput[]
    upsert?: FlockUpsertWithWhereUniqueWithoutCustomerInput | FlockUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: FlockCreateManyCustomerInputEnvelope
    set?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    disconnect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    delete?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    update?: FlockUpdateWithWhereUniqueWithoutCustomerInput | FlockUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: FlockUpdateManyWithWhereWithoutCustomerInput | FlockUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: FlockScalarWhereInput | FlockScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutAddressInput = {
    create?: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAddressInput
    connect?: EmployeeWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutAddressInput = {
    create?: XOR<CustomerCreateWithoutAddressInput, CustomerUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput
    connect?: CustomerWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EmployeeUpdateOneWithoutAddressNestedInput = {
    create?: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAddressInput
    upsert?: EmployeeUpsertWithoutAddressInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAddressInput, EmployeeUpdateWithoutAddressInput>, EmployeeUncheckedUpdateWithoutAddressInput>
  }

  export type CustomerUpdateOneWithoutAddressNestedInput = {
    create?: XOR<CustomerCreateWithoutAddressInput, CustomerUncheckedCreateWithoutAddressInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressInput
    upsert?: CustomerUpsertWithoutAddressInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAddressInput, CustomerUpdateWithoutAddressInput>, CustomerUncheckedUpdateWithoutAddressInput>
  }

  export type BranchCreateNestedOneWithoutBranchEmployeesInput = {
    create?: XOR<BranchCreateWithoutBranchEmployeesInput, BranchUncheckedCreateWithoutBranchEmployeesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutBranchEmployeesInput
    connect?: BranchWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutBranchEmployeesInput = {
    create?: XOR<EmployeeCreateWithoutBranchEmployeesInput, EmployeeUncheckedCreateWithoutBranchEmployeesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutBranchEmployeesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type BranchUpdateOneRequiredWithoutBranchEmployeesNestedInput = {
    create?: XOR<BranchCreateWithoutBranchEmployeesInput, BranchUncheckedCreateWithoutBranchEmployeesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutBranchEmployeesInput
    upsert?: BranchUpsertWithoutBranchEmployeesInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutBranchEmployeesInput, BranchUpdateWithoutBranchEmployeesInput>, BranchUncheckedUpdateWithoutBranchEmployeesInput>
  }

  export type EmployeeUpdateOneRequiredWithoutBranchEmployeesNestedInput = {
    create?: XOR<EmployeeCreateWithoutBranchEmployeesInput, EmployeeUncheckedCreateWithoutBranchEmployeesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutBranchEmployeesInput
    upsert?: EmployeeUpsertWithoutBranchEmployeesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutBranchEmployeesInput, EmployeeUpdateWithoutBranchEmployeesInput>, EmployeeUncheckedUpdateWithoutBranchEmployeesInput>
  }

  export type BranchCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<BranchCreateWithoutEmployeesInput, BranchUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutEmployeesInput
    connect?: BranchWhereUniqueInput
  }

  export type BranchEmployeeCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<BranchEmployeeCreateWithoutEmployeeInput, BranchEmployeeUncheckedCreateWithoutEmployeeInput> | BranchEmployeeCreateWithoutEmployeeInput[] | BranchEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BranchEmployeeCreateOrConnectWithoutEmployeeInput | BranchEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: BranchEmployeeCreateManyEmployeeInputEnvelope
    connect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
  }

  export type AddressCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEmployeeInput
    connect?: AddressWhereUniqueInput
  }

  export type FlockCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<FlockCreateWithoutEmployeeInput, FlockUncheckedCreateWithoutEmployeeInput> | FlockCreateWithoutEmployeeInput[] | FlockUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutEmployeeInput | FlockCreateOrConnectWithoutEmployeeInput[]
    createMany?: FlockCreateManyEmployeeInputEnvelope
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
  }

  export type BranchEmployeeUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<BranchEmployeeCreateWithoutEmployeeInput, BranchEmployeeUncheckedCreateWithoutEmployeeInput> | BranchEmployeeCreateWithoutEmployeeInput[] | BranchEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BranchEmployeeCreateOrConnectWithoutEmployeeInput | BranchEmployeeCreateOrConnectWithoutEmployeeInput[]
    createMany?: BranchEmployeeCreateManyEmployeeInputEnvelope
    connect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEmployeeInput
    connect?: AddressWhereUniqueInput
  }

  export type FlockUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<FlockCreateWithoutEmployeeInput, FlockUncheckedCreateWithoutEmployeeInput> | FlockCreateWithoutEmployeeInput[] | FlockUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutEmployeeInput | FlockCreateOrConnectWithoutEmployeeInput[]
    createMany?: FlockCreateManyEmployeeInputEnvelope
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
  }

  export type BranchUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<BranchCreateWithoutEmployeesInput, BranchUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutEmployeesInput
    upsert?: BranchUpsertWithoutEmployeesInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutEmployeesInput, BranchUpdateWithoutEmployeesInput>, BranchUncheckedUpdateWithoutEmployeesInput>
  }

  export type BranchEmployeeUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<BranchEmployeeCreateWithoutEmployeeInput, BranchEmployeeUncheckedCreateWithoutEmployeeInput> | BranchEmployeeCreateWithoutEmployeeInput[] | BranchEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BranchEmployeeCreateOrConnectWithoutEmployeeInput | BranchEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: BranchEmployeeCreateManyEmployeeInputEnvelope
    set?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    disconnect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    delete?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    connect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    update?: BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: BranchEmployeeUpdateManyWithWhereWithoutEmployeeInput | BranchEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: BranchEmployeeScalarWhereInput | BranchEmployeeScalarWhereInput[]
  }

  export type AddressUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEmployeeInput
    upsert?: AddressUpsertWithoutEmployeeInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutEmployeeInput, AddressUpdateWithoutEmployeeInput>, AddressUncheckedUpdateWithoutEmployeeInput>
  }

  export type FlockUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<FlockCreateWithoutEmployeeInput, FlockUncheckedCreateWithoutEmployeeInput> | FlockCreateWithoutEmployeeInput[] | FlockUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutEmployeeInput | FlockCreateOrConnectWithoutEmployeeInput[]
    upsert?: FlockUpsertWithWhereUniqueWithoutEmployeeInput | FlockUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: FlockCreateManyEmployeeInputEnvelope
    set?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    disconnect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    delete?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    update?: FlockUpdateWithWhereUniqueWithoutEmployeeInput | FlockUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: FlockUpdateManyWithWhereWithoutEmployeeInput | FlockUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: FlockScalarWhereInput | FlockScalarWhereInput[]
  }

  export type BranchEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<BranchEmployeeCreateWithoutEmployeeInput, BranchEmployeeUncheckedCreateWithoutEmployeeInput> | BranchEmployeeCreateWithoutEmployeeInput[] | BranchEmployeeUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: BranchEmployeeCreateOrConnectWithoutEmployeeInput | BranchEmployeeCreateOrConnectWithoutEmployeeInput[]
    upsert?: BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeInput | BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: BranchEmployeeCreateManyEmployeeInputEnvelope
    set?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    disconnect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    delete?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    connect?: BranchEmployeeWhereUniqueInput | BranchEmployeeWhereUniqueInput[]
    update?: BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeInput | BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: BranchEmployeeUpdateManyWithWhereWithoutEmployeeInput | BranchEmployeeUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: BranchEmployeeScalarWhereInput | BranchEmployeeScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEmployeeInput
    upsert?: AddressUpsertWithoutEmployeeInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutEmployeeInput, AddressUpdateWithoutEmployeeInput>, AddressUncheckedUpdateWithoutEmployeeInput>
  }

  export type FlockUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<FlockCreateWithoutEmployeeInput, FlockUncheckedCreateWithoutEmployeeInput> | FlockCreateWithoutEmployeeInput[] | FlockUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: FlockCreateOrConnectWithoutEmployeeInput | FlockCreateOrConnectWithoutEmployeeInput[]
    upsert?: FlockUpsertWithWhereUniqueWithoutEmployeeInput | FlockUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: FlockCreateManyEmployeeInputEnvelope
    set?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    disconnect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    delete?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    connect?: FlockWhereUniqueInput | FlockWhereUniqueInput[]
    update?: FlockUpdateWithWhereUniqueWithoutEmployeeInput | FlockUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: FlockUpdateManyWithWhereWithoutEmployeeInput | FlockUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: FlockScalarWhereInput | FlockScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutFlocksInput = {
    create?: XOR<CustomerCreateWithoutFlocksInput, CustomerUncheckedCreateWithoutFlocksInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFlocksInput
    connect?: CustomerWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutFlocksInput = {
    create?: XOR<EmployeeCreateWithoutFlocksInput, EmployeeUncheckedCreateWithoutFlocksInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutFlocksInput
    connect?: EmployeeWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutFlocksInput = {
    create?: XOR<BranchCreateWithoutFlocksInput, BranchUncheckedCreateWithoutFlocksInput>
    connectOrCreate?: BranchCreateOrConnectWithoutFlocksInput
    connect?: BranchWhereUniqueInput
  }

  export type EnumFlockStatusFieldUpdateOperationsInput = {
    set?: $Enums.FlockStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUpdateOneRequiredWithoutFlocksNestedInput = {
    create?: XOR<CustomerCreateWithoutFlocksInput, CustomerUncheckedCreateWithoutFlocksInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFlocksInput
    upsert?: CustomerUpsertWithoutFlocksInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutFlocksInput, CustomerUpdateWithoutFlocksInput>, CustomerUncheckedUpdateWithoutFlocksInput>
  }

  export type EmployeeUpdateOneRequiredWithoutFlocksNestedInput = {
    create?: XOR<EmployeeCreateWithoutFlocksInput, EmployeeUncheckedCreateWithoutFlocksInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutFlocksInput
    upsert?: EmployeeUpsertWithoutFlocksInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutFlocksInput, EmployeeUpdateWithoutFlocksInput>, EmployeeUncheckedUpdateWithoutFlocksInput>
  }

  export type BranchUpdateOneRequiredWithoutFlocksNestedInput = {
    create?: XOR<BranchCreateWithoutFlocksInput, BranchUncheckedCreateWithoutFlocksInput>
    connectOrCreate?: BranchCreateOrConnectWithoutFlocksInput
    upsert?: BranchUpsertWithoutFlocksInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutFlocksInput, BranchUpdateWithoutFlocksInput>, BranchUncheckedUpdateWithoutFlocksInput>
  }

  export type FeedCreateNestedManyWithoutFeedNameCategoryInput = {
    create?: XOR<FeedCreateWithoutFeedNameCategoryInput, FeedUncheckedCreateWithoutFeedNameCategoryInput> | FeedCreateWithoutFeedNameCategoryInput[] | FeedUncheckedCreateWithoutFeedNameCategoryInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutFeedNameCategoryInput | FeedCreateOrConnectWithoutFeedNameCategoryInput[]
    createMany?: FeedCreateManyFeedNameCategoryInputEnvelope
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
  }

  export type FeedUncheckedCreateNestedManyWithoutFeedNameCategoryInput = {
    create?: XOR<FeedCreateWithoutFeedNameCategoryInput, FeedUncheckedCreateWithoutFeedNameCategoryInput> | FeedCreateWithoutFeedNameCategoryInput[] | FeedUncheckedCreateWithoutFeedNameCategoryInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutFeedNameCategoryInput | FeedCreateOrConnectWithoutFeedNameCategoryInput[]
    createMany?: FeedCreateManyFeedNameCategoryInputEnvelope
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
  }

  export type FeedUpdateManyWithoutFeedNameCategoryNestedInput = {
    create?: XOR<FeedCreateWithoutFeedNameCategoryInput, FeedUncheckedCreateWithoutFeedNameCategoryInput> | FeedCreateWithoutFeedNameCategoryInput[] | FeedUncheckedCreateWithoutFeedNameCategoryInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutFeedNameCategoryInput | FeedCreateOrConnectWithoutFeedNameCategoryInput[]
    upsert?: FeedUpsertWithWhereUniqueWithoutFeedNameCategoryInput | FeedUpsertWithWhereUniqueWithoutFeedNameCategoryInput[]
    createMany?: FeedCreateManyFeedNameCategoryInputEnvelope
    set?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    disconnect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    delete?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    update?: FeedUpdateWithWhereUniqueWithoutFeedNameCategoryInput | FeedUpdateWithWhereUniqueWithoutFeedNameCategoryInput[]
    updateMany?: FeedUpdateManyWithWhereWithoutFeedNameCategoryInput | FeedUpdateManyWithWhereWithoutFeedNameCategoryInput[]
    deleteMany?: FeedScalarWhereInput | FeedScalarWhereInput[]
  }

  export type FeedUncheckedUpdateManyWithoutFeedNameCategoryNestedInput = {
    create?: XOR<FeedCreateWithoutFeedNameCategoryInput, FeedUncheckedCreateWithoutFeedNameCategoryInput> | FeedCreateWithoutFeedNameCategoryInput[] | FeedUncheckedCreateWithoutFeedNameCategoryInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutFeedNameCategoryInput | FeedCreateOrConnectWithoutFeedNameCategoryInput[]
    upsert?: FeedUpsertWithWhereUniqueWithoutFeedNameCategoryInput | FeedUpsertWithWhereUniqueWithoutFeedNameCategoryInput[]
    createMany?: FeedCreateManyFeedNameCategoryInputEnvelope
    set?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    disconnect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    delete?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    update?: FeedUpdateWithWhereUniqueWithoutFeedNameCategoryInput | FeedUpdateWithWhereUniqueWithoutFeedNameCategoryInput[]
    updateMany?: FeedUpdateManyWithWhereWithoutFeedNameCategoryInput | FeedUpdateManyWithWhereWithoutFeedNameCategoryInput[]
    deleteMany?: FeedScalarWhereInput | FeedScalarWhereInput[]
  }

  export type FeedNameCategoryCreateNestedOneWithoutFeedsInput = {
    create?: XOR<FeedNameCategoryCreateWithoutFeedsInput, FeedNameCategoryUncheckedCreateWithoutFeedsInput>
    connectOrCreate?: FeedNameCategoryCreateOrConnectWithoutFeedsInput
    connect?: FeedNameCategoryWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutFeedInput = {
    create?: XOR<BranchCreateWithoutFeedInput, BranchUncheckedCreateWithoutFeedInput>
    connectOrCreate?: BranchCreateOrConnectWithoutFeedInput
    connect?: BranchWhereUniqueInput
  }

  export type FeedNameCategoryUpdateOneRequiredWithoutFeedsNestedInput = {
    create?: XOR<FeedNameCategoryCreateWithoutFeedsInput, FeedNameCategoryUncheckedCreateWithoutFeedsInput>
    connectOrCreate?: FeedNameCategoryCreateOrConnectWithoutFeedsInput
    upsert?: FeedNameCategoryUpsertWithoutFeedsInput
    connect?: FeedNameCategoryWhereUniqueInput
    update?: XOR<XOR<FeedNameCategoryUpdateToOneWithWhereWithoutFeedsInput, FeedNameCategoryUpdateWithoutFeedsInput>, FeedNameCategoryUncheckedUpdateWithoutFeedsInput>
  }

  export type BranchUpdateOneWithoutFeedNestedInput = {
    create?: XOR<BranchCreateWithoutFeedInput, BranchUncheckedCreateWithoutFeedInput>
    connectOrCreate?: BranchCreateOrConnectWithoutFeedInput
    upsert?: BranchUpsertWithoutFeedInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutFeedInput, BranchUpdateWithoutFeedInput>, BranchUncheckedUpdateWithoutFeedInput>
  }

  export type MedicineNameAddCreateNestedManyWithoutMedicineCategoryInput = {
    create?: XOR<MedicineNameAddCreateWithoutMedicineCategoryInput, MedicineNameAddUncheckedCreateWithoutMedicineCategoryInput> | MedicineNameAddCreateWithoutMedicineCategoryInput[] | MedicineNameAddUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicineNameAddCreateOrConnectWithoutMedicineCategoryInput | MedicineNameAddCreateOrConnectWithoutMedicineCategoryInput[]
    createMany?: MedicineNameAddCreateManyMedicineCategoryInputEnvelope
    connect?: MedicineNameAddWhereUniqueInput | MedicineNameAddWhereUniqueInput[]
  }

  export type MedicineStockCreateNestedManyWithoutMedicineCategoryInput = {
    create?: XOR<MedicineStockCreateWithoutMedicineCategoryInput, MedicineStockUncheckedCreateWithoutMedicineCategoryInput> | MedicineStockCreateWithoutMedicineCategoryInput[] | MedicineStockUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutMedicineCategoryInput | MedicineStockCreateOrConnectWithoutMedicineCategoryInput[]
    createMany?: MedicineStockCreateManyMedicineCategoryInputEnvelope
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
  }

  export type MedicinePurchessCreateNestedManyWithoutMedicineCategoryInput = {
    create?: XOR<MedicinePurchessCreateWithoutMedicineCategoryInput, MedicinePurchessUncheckedCreateWithoutMedicineCategoryInput> | MedicinePurchessCreateWithoutMedicineCategoryInput[] | MedicinePurchessUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutMedicineCategoryInput | MedicinePurchessCreateOrConnectWithoutMedicineCategoryInput[]
    createMany?: MedicinePurchessCreateManyMedicineCategoryInputEnvelope
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
  }

  export type MedicineNameAddUncheckedCreateNestedManyWithoutMedicineCategoryInput = {
    create?: XOR<MedicineNameAddCreateWithoutMedicineCategoryInput, MedicineNameAddUncheckedCreateWithoutMedicineCategoryInput> | MedicineNameAddCreateWithoutMedicineCategoryInput[] | MedicineNameAddUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicineNameAddCreateOrConnectWithoutMedicineCategoryInput | MedicineNameAddCreateOrConnectWithoutMedicineCategoryInput[]
    createMany?: MedicineNameAddCreateManyMedicineCategoryInputEnvelope
    connect?: MedicineNameAddWhereUniqueInput | MedicineNameAddWhereUniqueInput[]
  }

  export type MedicineStockUncheckedCreateNestedManyWithoutMedicineCategoryInput = {
    create?: XOR<MedicineStockCreateWithoutMedicineCategoryInput, MedicineStockUncheckedCreateWithoutMedicineCategoryInput> | MedicineStockCreateWithoutMedicineCategoryInput[] | MedicineStockUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutMedicineCategoryInput | MedicineStockCreateOrConnectWithoutMedicineCategoryInput[]
    createMany?: MedicineStockCreateManyMedicineCategoryInputEnvelope
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
  }

  export type MedicinePurchessUncheckedCreateNestedManyWithoutMedicineCategoryInput = {
    create?: XOR<MedicinePurchessCreateWithoutMedicineCategoryInput, MedicinePurchessUncheckedCreateWithoutMedicineCategoryInput> | MedicinePurchessCreateWithoutMedicineCategoryInput[] | MedicinePurchessUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutMedicineCategoryInput | MedicinePurchessCreateOrConnectWithoutMedicineCategoryInput[]
    createMany?: MedicinePurchessCreateManyMedicineCategoryInputEnvelope
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
  }

  export type MedicineNameAddUpdateManyWithoutMedicineCategoryNestedInput = {
    create?: XOR<MedicineNameAddCreateWithoutMedicineCategoryInput, MedicineNameAddUncheckedCreateWithoutMedicineCategoryInput> | MedicineNameAddCreateWithoutMedicineCategoryInput[] | MedicineNameAddUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicineNameAddCreateOrConnectWithoutMedicineCategoryInput | MedicineNameAddCreateOrConnectWithoutMedicineCategoryInput[]
    upsert?: MedicineNameAddUpsertWithWhereUniqueWithoutMedicineCategoryInput | MedicineNameAddUpsertWithWhereUniqueWithoutMedicineCategoryInput[]
    createMany?: MedicineNameAddCreateManyMedicineCategoryInputEnvelope
    set?: MedicineNameAddWhereUniqueInput | MedicineNameAddWhereUniqueInput[]
    disconnect?: MedicineNameAddWhereUniqueInput | MedicineNameAddWhereUniqueInput[]
    delete?: MedicineNameAddWhereUniqueInput | MedicineNameAddWhereUniqueInput[]
    connect?: MedicineNameAddWhereUniqueInput | MedicineNameAddWhereUniqueInput[]
    update?: MedicineNameAddUpdateWithWhereUniqueWithoutMedicineCategoryInput | MedicineNameAddUpdateWithWhereUniqueWithoutMedicineCategoryInput[]
    updateMany?: MedicineNameAddUpdateManyWithWhereWithoutMedicineCategoryInput | MedicineNameAddUpdateManyWithWhereWithoutMedicineCategoryInput[]
    deleteMany?: MedicineNameAddScalarWhereInput | MedicineNameAddScalarWhereInput[]
  }

  export type MedicineStockUpdateManyWithoutMedicineCategoryNestedInput = {
    create?: XOR<MedicineStockCreateWithoutMedicineCategoryInput, MedicineStockUncheckedCreateWithoutMedicineCategoryInput> | MedicineStockCreateWithoutMedicineCategoryInput[] | MedicineStockUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutMedicineCategoryInput | MedicineStockCreateOrConnectWithoutMedicineCategoryInput[]
    upsert?: MedicineStockUpsertWithWhereUniqueWithoutMedicineCategoryInput | MedicineStockUpsertWithWhereUniqueWithoutMedicineCategoryInput[]
    createMany?: MedicineStockCreateManyMedicineCategoryInputEnvelope
    set?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    disconnect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    delete?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    update?: MedicineStockUpdateWithWhereUniqueWithoutMedicineCategoryInput | MedicineStockUpdateWithWhereUniqueWithoutMedicineCategoryInput[]
    updateMany?: MedicineStockUpdateManyWithWhereWithoutMedicineCategoryInput | MedicineStockUpdateManyWithWhereWithoutMedicineCategoryInput[]
    deleteMany?: MedicineStockScalarWhereInput | MedicineStockScalarWhereInput[]
  }

  export type MedicinePurchessUpdateManyWithoutMedicineCategoryNestedInput = {
    create?: XOR<MedicinePurchessCreateWithoutMedicineCategoryInput, MedicinePurchessUncheckedCreateWithoutMedicineCategoryInput> | MedicinePurchessCreateWithoutMedicineCategoryInput[] | MedicinePurchessUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutMedicineCategoryInput | MedicinePurchessCreateOrConnectWithoutMedicineCategoryInput[]
    upsert?: MedicinePurchessUpsertWithWhereUniqueWithoutMedicineCategoryInput | MedicinePurchessUpsertWithWhereUniqueWithoutMedicineCategoryInput[]
    createMany?: MedicinePurchessCreateManyMedicineCategoryInputEnvelope
    set?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    disconnect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    delete?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    update?: MedicinePurchessUpdateWithWhereUniqueWithoutMedicineCategoryInput | MedicinePurchessUpdateWithWhereUniqueWithoutMedicineCategoryInput[]
    updateMany?: MedicinePurchessUpdateManyWithWhereWithoutMedicineCategoryInput | MedicinePurchessUpdateManyWithWhereWithoutMedicineCategoryInput[]
    deleteMany?: MedicinePurchessScalarWhereInput | MedicinePurchessScalarWhereInput[]
  }

  export type MedicineNameAddUncheckedUpdateManyWithoutMedicineCategoryNestedInput = {
    create?: XOR<MedicineNameAddCreateWithoutMedicineCategoryInput, MedicineNameAddUncheckedCreateWithoutMedicineCategoryInput> | MedicineNameAddCreateWithoutMedicineCategoryInput[] | MedicineNameAddUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicineNameAddCreateOrConnectWithoutMedicineCategoryInput | MedicineNameAddCreateOrConnectWithoutMedicineCategoryInput[]
    upsert?: MedicineNameAddUpsertWithWhereUniqueWithoutMedicineCategoryInput | MedicineNameAddUpsertWithWhereUniqueWithoutMedicineCategoryInput[]
    createMany?: MedicineNameAddCreateManyMedicineCategoryInputEnvelope
    set?: MedicineNameAddWhereUniqueInput | MedicineNameAddWhereUniqueInput[]
    disconnect?: MedicineNameAddWhereUniqueInput | MedicineNameAddWhereUniqueInput[]
    delete?: MedicineNameAddWhereUniqueInput | MedicineNameAddWhereUniqueInput[]
    connect?: MedicineNameAddWhereUniqueInput | MedicineNameAddWhereUniqueInput[]
    update?: MedicineNameAddUpdateWithWhereUniqueWithoutMedicineCategoryInput | MedicineNameAddUpdateWithWhereUniqueWithoutMedicineCategoryInput[]
    updateMany?: MedicineNameAddUpdateManyWithWhereWithoutMedicineCategoryInput | MedicineNameAddUpdateManyWithWhereWithoutMedicineCategoryInput[]
    deleteMany?: MedicineNameAddScalarWhereInput | MedicineNameAddScalarWhereInput[]
  }

  export type MedicineStockUncheckedUpdateManyWithoutMedicineCategoryNestedInput = {
    create?: XOR<MedicineStockCreateWithoutMedicineCategoryInput, MedicineStockUncheckedCreateWithoutMedicineCategoryInput> | MedicineStockCreateWithoutMedicineCategoryInput[] | MedicineStockUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutMedicineCategoryInput | MedicineStockCreateOrConnectWithoutMedicineCategoryInput[]
    upsert?: MedicineStockUpsertWithWhereUniqueWithoutMedicineCategoryInput | MedicineStockUpsertWithWhereUniqueWithoutMedicineCategoryInput[]
    createMany?: MedicineStockCreateManyMedicineCategoryInputEnvelope
    set?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    disconnect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    delete?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    update?: MedicineStockUpdateWithWhereUniqueWithoutMedicineCategoryInput | MedicineStockUpdateWithWhereUniqueWithoutMedicineCategoryInput[]
    updateMany?: MedicineStockUpdateManyWithWhereWithoutMedicineCategoryInput | MedicineStockUpdateManyWithWhereWithoutMedicineCategoryInput[]
    deleteMany?: MedicineStockScalarWhereInput | MedicineStockScalarWhereInput[]
  }

  export type MedicinePurchessUncheckedUpdateManyWithoutMedicineCategoryNestedInput = {
    create?: XOR<MedicinePurchessCreateWithoutMedicineCategoryInput, MedicinePurchessUncheckedCreateWithoutMedicineCategoryInput> | MedicinePurchessCreateWithoutMedicineCategoryInput[] | MedicinePurchessUncheckedCreateWithoutMedicineCategoryInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutMedicineCategoryInput | MedicinePurchessCreateOrConnectWithoutMedicineCategoryInput[]
    upsert?: MedicinePurchessUpsertWithWhereUniqueWithoutMedicineCategoryInput | MedicinePurchessUpsertWithWhereUniqueWithoutMedicineCategoryInput[]
    createMany?: MedicinePurchessCreateManyMedicineCategoryInputEnvelope
    set?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    disconnect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    delete?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    update?: MedicinePurchessUpdateWithWhereUniqueWithoutMedicineCategoryInput | MedicinePurchessUpdateWithWhereUniqueWithoutMedicineCategoryInput[]
    updateMany?: MedicinePurchessUpdateManyWithWhereWithoutMedicineCategoryInput | MedicinePurchessUpdateManyWithWhereWithoutMedicineCategoryInput[]
    deleteMany?: MedicinePurchessScalarWhereInput | MedicinePurchessScalarWhereInput[]
  }

  export type MedicineNameCategoryCreateNestedOneWithoutMedicineNameAddInput = {
    create?: XOR<MedicineNameCategoryCreateWithoutMedicineNameAddInput, MedicineNameCategoryUncheckedCreateWithoutMedicineNameAddInput>
    connectOrCreate?: MedicineNameCategoryCreateOrConnectWithoutMedicineNameAddInput
    connect?: MedicineNameCategoryWhereUniqueInput
  }

  export type MedicineStockCreateNestedManyWithoutMedicineNameAddInput = {
    create?: XOR<MedicineStockCreateWithoutMedicineNameAddInput, MedicineStockUncheckedCreateWithoutMedicineNameAddInput> | MedicineStockCreateWithoutMedicineNameAddInput[] | MedicineStockUncheckedCreateWithoutMedicineNameAddInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutMedicineNameAddInput | MedicineStockCreateOrConnectWithoutMedicineNameAddInput[]
    createMany?: MedicineStockCreateManyMedicineNameAddInputEnvelope
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
  }

  export type MedicinePurchessCreateNestedManyWithoutMedicineNameAddInput = {
    create?: XOR<MedicinePurchessCreateWithoutMedicineNameAddInput, MedicinePurchessUncheckedCreateWithoutMedicineNameAddInput> | MedicinePurchessCreateWithoutMedicineNameAddInput[] | MedicinePurchessUncheckedCreateWithoutMedicineNameAddInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutMedicineNameAddInput | MedicinePurchessCreateOrConnectWithoutMedicineNameAddInput[]
    createMany?: MedicinePurchessCreateManyMedicineNameAddInputEnvelope
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
  }

  export type MedicineStockUncheckedCreateNestedManyWithoutMedicineNameAddInput = {
    create?: XOR<MedicineStockCreateWithoutMedicineNameAddInput, MedicineStockUncheckedCreateWithoutMedicineNameAddInput> | MedicineStockCreateWithoutMedicineNameAddInput[] | MedicineStockUncheckedCreateWithoutMedicineNameAddInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutMedicineNameAddInput | MedicineStockCreateOrConnectWithoutMedicineNameAddInput[]
    createMany?: MedicineStockCreateManyMedicineNameAddInputEnvelope
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
  }

  export type MedicinePurchessUncheckedCreateNestedManyWithoutMedicineNameAddInput = {
    create?: XOR<MedicinePurchessCreateWithoutMedicineNameAddInput, MedicinePurchessUncheckedCreateWithoutMedicineNameAddInput> | MedicinePurchessCreateWithoutMedicineNameAddInput[] | MedicinePurchessUncheckedCreateWithoutMedicineNameAddInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutMedicineNameAddInput | MedicinePurchessCreateOrConnectWithoutMedicineNameAddInput[]
    createMany?: MedicinePurchessCreateManyMedicineNameAddInputEnvelope
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
  }

  export type MedicineNameCategoryUpdateOneRequiredWithoutMedicineNameAddNestedInput = {
    create?: XOR<MedicineNameCategoryCreateWithoutMedicineNameAddInput, MedicineNameCategoryUncheckedCreateWithoutMedicineNameAddInput>
    connectOrCreate?: MedicineNameCategoryCreateOrConnectWithoutMedicineNameAddInput
    upsert?: MedicineNameCategoryUpsertWithoutMedicineNameAddInput
    connect?: MedicineNameCategoryWhereUniqueInput
    update?: XOR<XOR<MedicineNameCategoryUpdateToOneWithWhereWithoutMedicineNameAddInput, MedicineNameCategoryUpdateWithoutMedicineNameAddInput>, MedicineNameCategoryUncheckedUpdateWithoutMedicineNameAddInput>
  }

  export type MedicineStockUpdateManyWithoutMedicineNameAddNestedInput = {
    create?: XOR<MedicineStockCreateWithoutMedicineNameAddInput, MedicineStockUncheckedCreateWithoutMedicineNameAddInput> | MedicineStockCreateWithoutMedicineNameAddInput[] | MedicineStockUncheckedCreateWithoutMedicineNameAddInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutMedicineNameAddInput | MedicineStockCreateOrConnectWithoutMedicineNameAddInput[]
    upsert?: MedicineStockUpsertWithWhereUniqueWithoutMedicineNameAddInput | MedicineStockUpsertWithWhereUniqueWithoutMedicineNameAddInput[]
    createMany?: MedicineStockCreateManyMedicineNameAddInputEnvelope
    set?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    disconnect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    delete?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    update?: MedicineStockUpdateWithWhereUniqueWithoutMedicineNameAddInput | MedicineStockUpdateWithWhereUniqueWithoutMedicineNameAddInput[]
    updateMany?: MedicineStockUpdateManyWithWhereWithoutMedicineNameAddInput | MedicineStockUpdateManyWithWhereWithoutMedicineNameAddInput[]
    deleteMany?: MedicineStockScalarWhereInput | MedicineStockScalarWhereInput[]
  }

  export type MedicinePurchessUpdateManyWithoutMedicineNameAddNestedInput = {
    create?: XOR<MedicinePurchessCreateWithoutMedicineNameAddInput, MedicinePurchessUncheckedCreateWithoutMedicineNameAddInput> | MedicinePurchessCreateWithoutMedicineNameAddInput[] | MedicinePurchessUncheckedCreateWithoutMedicineNameAddInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutMedicineNameAddInput | MedicinePurchessCreateOrConnectWithoutMedicineNameAddInput[]
    upsert?: MedicinePurchessUpsertWithWhereUniqueWithoutMedicineNameAddInput | MedicinePurchessUpsertWithWhereUniqueWithoutMedicineNameAddInput[]
    createMany?: MedicinePurchessCreateManyMedicineNameAddInputEnvelope
    set?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    disconnect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    delete?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    update?: MedicinePurchessUpdateWithWhereUniqueWithoutMedicineNameAddInput | MedicinePurchessUpdateWithWhereUniqueWithoutMedicineNameAddInput[]
    updateMany?: MedicinePurchessUpdateManyWithWhereWithoutMedicineNameAddInput | MedicinePurchessUpdateManyWithWhereWithoutMedicineNameAddInput[]
    deleteMany?: MedicinePurchessScalarWhereInput | MedicinePurchessScalarWhereInput[]
  }

  export type MedicineStockUncheckedUpdateManyWithoutMedicineNameAddNestedInput = {
    create?: XOR<MedicineStockCreateWithoutMedicineNameAddInput, MedicineStockUncheckedCreateWithoutMedicineNameAddInput> | MedicineStockCreateWithoutMedicineNameAddInput[] | MedicineStockUncheckedCreateWithoutMedicineNameAddInput[]
    connectOrCreate?: MedicineStockCreateOrConnectWithoutMedicineNameAddInput | MedicineStockCreateOrConnectWithoutMedicineNameAddInput[]
    upsert?: MedicineStockUpsertWithWhereUniqueWithoutMedicineNameAddInput | MedicineStockUpsertWithWhereUniqueWithoutMedicineNameAddInput[]
    createMany?: MedicineStockCreateManyMedicineNameAddInputEnvelope
    set?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    disconnect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    delete?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    connect?: MedicineStockWhereUniqueInput | MedicineStockWhereUniqueInput[]
    update?: MedicineStockUpdateWithWhereUniqueWithoutMedicineNameAddInput | MedicineStockUpdateWithWhereUniqueWithoutMedicineNameAddInput[]
    updateMany?: MedicineStockUpdateManyWithWhereWithoutMedicineNameAddInput | MedicineStockUpdateManyWithWhereWithoutMedicineNameAddInput[]
    deleteMany?: MedicineStockScalarWhereInput | MedicineStockScalarWhereInput[]
  }

  export type MedicinePurchessUncheckedUpdateManyWithoutMedicineNameAddNestedInput = {
    create?: XOR<MedicinePurchessCreateWithoutMedicineNameAddInput, MedicinePurchessUncheckedCreateWithoutMedicineNameAddInput> | MedicinePurchessCreateWithoutMedicineNameAddInput[] | MedicinePurchessUncheckedCreateWithoutMedicineNameAddInput[]
    connectOrCreate?: MedicinePurchessCreateOrConnectWithoutMedicineNameAddInput | MedicinePurchessCreateOrConnectWithoutMedicineNameAddInput[]
    upsert?: MedicinePurchessUpsertWithWhereUniqueWithoutMedicineNameAddInput | MedicinePurchessUpsertWithWhereUniqueWithoutMedicineNameAddInput[]
    createMany?: MedicinePurchessCreateManyMedicineNameAddInputEnvelope
    set?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    disconnect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    delete?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    connect?: MedicinePurchessWhereUniqueInput | MedicinePurchessWhereUniqueInput[]
    update?: MedicinePurchessUpdateWithWhereUniqueWithoutMedicineNameAddInput | MedicinePurchessUpdateWithWhereUniqueWithoutMedicineNameAddInput[]
    updateMany?: MedicinePurchessUpdateManyWithWhereWithoutMedicineNameAddInput | MedicinePurchessUpdateManyWithWhereWithoutMedicineNameAddInput[]
    deleteMany?: MedicinePurchessScalarWhereInput | MedicinePurchessScalarWhereInput[]
  }

  export type MedicineNameCategoryCreateNestedOneWithoutMedicinePurchessInput = {
    create?: XOR<MedicineNameCategoryCreateWithoutMedicinePurchessInput, MedicineNameCategoryUncheckedCreateWithoutMedicinePurchessInput>
    connectOrCreate?: MedicineNameCategoryCreateOrConnectWithoutMedicinePurchessInput
    connect?: MedicineNameCategoryWhereUniqueInput
  }

  export type MedicineNameAddCreateNestedOneWithoutMedicinePurchessInput = {
    create?: XOR<MedicineNameAddCreateWithoutMedicinePurchessInput, MedicineNameAddUncheckedCreateWithoutMedicinePurchessInput>
    connectOrCreate?: MedicineNameAddCreateOrConnectWithoutMedicinePurchessInput
    connect?: MedicineNameAddWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutMedicinePurchessInput = {
    create?: XOR<BranchCreateWithoutMedicinePurchessInput, BranchUncheckedCreateWithoutMedicinePurchessInput>
    connectOrCreate?: BranchCreateOrConnectWithoutMedicinePurchessInput
    connect?: BranchWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MedicineNameCategoryUpdateOneRequiredWithoutMedicinePurchessNestedInput = {
    create?: XOR<MedicineNameCategoryCreateWithoutMedicinePurchessInput, MedicineNameCategoryUncheckedCreateWithoutMedicinePurchessInput>
    connectOrCreate?: MedicineNameCategoryCreateOrConnectWithoutMedicinePurchessInput
    upsert?: MedicineNameCategoryUpsertWithoutMedicinePurchessInput
    connect?: MedicineNameCategoryWhereUniqueInput
    update?: XOR<XOR<MedicineNameCategoryUpdateToOneWithWhereWithoutMedicinePurchessInput, MedicineNameCategoryUpdateWithoutMedicinePurchessInput>, MedicineNameCategoryUncheckedUpdateWithoutMedicinePurchessInput>
  }

  export type MedicineNameAddUpdateOneRequiredWithoutMedicinePurchessNestedInput = {
    create?: XOR<MedicineNameAddCreateWithoutMedicinePurchessInput, MedicineNameAddUncheckedCreateWithoutMedicinePurchessInput>
    connectOrCreate?: MedicineNameAddCreateOrConnectWithoutMedicinePurchessInput
    upsert?: MedicineNameAddUpsertWithoutMedicinePurchessInput
    connect?: MedicineNameAddWhereUniqueInput
    update?: XOR<XOR<MedicineNameAddUpdateToOneWithWhereWithoutMedicinePurchessInput, MedicineNameAddUpdateWithoutMedicinePurchessInput>, MedicineNameAddUncheckedUpdateWithoutMedicinePurchessInput>
  }

  export type BranchUpdateOneRequiredWithoutMedicinePurchessNestedInput = {
    create?: XOR<BranchCreateWithoutMedicinePurchessInput, BranchUncheckedCreateWithoutMedicinePurchessInput>
    connectOrCreate?: BranchCreateOrConnectWithoutMedicinePurchessInput
    upsert?: BranchUpsertWithoutMedicinePurchessInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutMedicinePurchessInput, BranchUpdateWithoutMedicinePurchessInput>, BranchUncheckedUpdateWithoutMedicinePurchessInput>
  }

  export type MedicineNameAddCreateNestedOneWithoutMedicineStockInput = {
    create?: XOR<MedicineNameAddCreateWithoutMedicineStockInput, MedicineNameAddUncheckedCreateWithoutMedicineStockInput>
    connectOrCreate?: MedicineNameAddCreateOrConnectWithoutMedicineStockInput
    connect?: MedicineNameAddWhereUniqueInput
  }

  export type MedicineNameCategoryCreateNestedOneWithoutMedicineStockInput = {
    create?: XOR<MedicineNameCategoryCreateWithoutMedicineStockInput, MedicineNameCategoryUncheckedCreateWithoutMedicineStockInput>
    connectOrCreate?: MedicineNameCategoryCreateOrConnectWithoutMedicineStockInput
    connect?: MedicineNameCategoryWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutMedicineStockInput = {
    create?: XOR<BranchCreateWithoutMedicineStockInput, BranchUncheckedCreateWithoutMedicineStockInput>
    connectOrCreate?: BranchCreateOrConnectWithoutMedicineStockInput
    connect?: BranchWhereUniqueInput
  }

  export type MedicineNameAddUpdateOneRequiredWithoutMedicineStockNestedInput = {
    create?: XOR<MedicineNameAddCreateWithoutMedicineStockInput, MedicineNameAddUncheckedCreateWithoutMedicineStockInput>
    connectOrCreate?: MedicineNameAddCreateOrConnectWithoutMedicineStockInput
    upsert?: MedicineNameAddUpsertWithoutMedicineStockInput
    connect?: MedicineNameAddWhereUniqueInput
    update?: XOR<XOR<MedicineNameAddUpdateToOneWithWhereWithoutMedicineStockInput, MedicineNameAddUpdateWithoutMedicineStockInput>, MedicineNameAddUncheckedUpdateWithoutMedicineStockInput>
  }

  export type MedicineNameCategoryUpdateOneRequiredWithoutMedicineStockNestedInput = {
    create?: XOR<MedicineNameCategoryCreateWithoutMedicineStockInput, MedicineNameCategoryUncheckedCreateWithoutMedicineStockInput>
    connectOrCreate?: MedicineNameCategoryCreateOrConnectWithoutMedicineStockInput
    upsert?: MedicineNameCategoryUpsertWithoutMedicineStockInput
    connect?: MedicineNameCategoryWhereUniqueInput
    update?: XOR<XOR<MedicineNameCategoryUpdateToOneWithWhereWithoutMedicineStockInput, MedicineNameCategoryUpdateWithoutMedicineStockInput>, MedicineNameCategoryUncheckedUpdateWithoutMedicineStockInput>
  }

  export type BranchUpdateOneRequiredWithoutMedicineStockNestedInput = {
    create?: XOR<BranchCreateWithoutMedicineStockInput, BranchUncheckedCreateWithoutMedicineStockInput>
    connectOrCreate?: BranchCreateOrConnectWithoutMedicineStockInput
    upsert?: BranchUpsertWithoutMedicineStockInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutMedicineStockInput, BranchUpdateWithoutMedicineStockInput>, BranchUncheckedUpdateWithoutMedicineStockInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumBranchTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchType | EnumBranchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchTypeFilter<$PrismaModel> | $Enums.BranchType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumBranchTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BranchType | EnumBranchTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BranchType[] | ListEnumBranchTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBranchTypeWithAggregatesFilter<$PrismaModel> | $Enums.BranchType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBranchTypeFilter<$PrismaModel>
    _max?: NestedEnumBranchTypeFilter<$PrismaModel>
  }

  export type NestedEnumCusttypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Custtype | EnumCusttypeFieldRefInput<$PrismaModel>
    in?: $Enums.Custtype[] | ListEnumCusttypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Custtype[] | ListEnumCusttypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCusttypeFilter<$PrismaModel> | $Enums.Custtype
  }

  export type NestedEnumCusttypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Custtype | EnumCusttypeFieldRefInput<$PrismaModel>
    in?: $Enums.Custtype[] | ListEnumCusttypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Custtype[] | ListEnumCusttypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCusttypeWithAggregatesFilter<$PrismaModel> | $Enums.Custtype
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCusttypeFilter<$PrismaModel>
    _max?: NestedEnumCusttypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumFlockStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlockStatus | EnumFlockStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlockStatus[] | ListEnumFlockStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlockStatus[] | ListEnumFlockStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlockStatusFilter<$PrismaModel> | $Enums.FlockStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumFlockStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlockStatus | EnumFlockStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlockStatus[] | ListEnumFlockStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlockStatus[] | ListEnumFlockStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlockStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlockStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlockStatusFilter<$PrismaModel>
    _max?: NestedEnumFlockStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CustomerCreateWithoutBranchInput = {
    id?: string
    farmCode: string
    name: string
    farmType: $Enums.Custtype
    totalShed: number
    totalSquare: number
    capacity: number
    nid: string
    address?: AddressCreateNestedOneWithoutCustomerInput
    flocks?: FlockCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutBranchInput = {
    id?: string
    farmCode: string
    name: string
    farmType: $Enums.Custtype
    totalShed: number
    totalSquare: number
    capacity: number
    nid: string
    address?: AddressUncheckedCreateNestedOneWithoutCustomerInput
    flocks?: FlockUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutBranchInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBranchInput, CustomerUncheckedCreateWithoutBranchInput>
  }

  export type CustomerCreateManyBranchInputEnvelope = {
    data: CustomerCreateManyBranchInput | CustomerCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutBranchInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branchEmployees?: BranchEmployeeCreateNestedManyWithoutEmployeeInput
    address?: AddressCreateNestedOneWithoutEmployeeInput
    flocks?: FlockCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutBranchInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branchEmployees?: BranchEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    flocks?: FlockUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutBranchInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput>
  }

  export type EmployeeCreateManyBranchInputEnvelope = {
    data: EmployeeCreateManyBranchInput | EmployeeCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type BranchEmployeeCreateWithoutBranchInput = {
    id?: string
    employee: EmployeeCreateNestedOneWithoutBranchEmployeesInput
  }

  export type BranchEmployeeUncheckedCreateWithoutBranchInput = {
    id?: string
    employeeId: string
  }

  export type BranchEmployeeCreateOrConnectWithoutBranchInput = {
    where: BranchEmployeeWhereUniqueInput
    create: XOR<BranchEmployeeCreateWithoutBranchInput, BranchEmployeeUncheckedCreateWithoutBranchInput>
  }

  export type BranchEmployeeCreateManyBranchInputEnvelope = {
    data: BranchEmployeeCreateManyBranchInput | BranchEmployeeCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type FlockCreateWithoutBranchInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
    customer: CustomerCreateNestedOneWithoutFlocksInput
    employee: EmployeeCreateNestedOneWithoutFlocksInput
  }

  export type FlockUncheckedCreateWithoutBranchInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    executiveId: string
    farmCode: string
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
  }

  export type FlockCreateOrConnectWithoutBranchInput = {
    where: FlockWhereUniqueInput
    create: XOR<FlockCreateWithoutBranchInput, FlockUncheckedCreateWithoutBranchInput>
  }

  export type FlockCreateManyBranchInputEnvelope = {
    data: FlockCreateManyBranchInput | FlockCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type FeedCreateWithoutBranchInput = {
    id?: string
    stock: number
    feedNameCategory: FeedNameCategoryCreateNestedOneWithoutFeedsInput
  }

  export type FeedUncheckedCreateWithoutBranchInput = {
    id?: string
    feedName: string
    stock: number
  }

  export type FeedCreateOrConnectWithoutBranchInput = {
    where: FeedWhereUniqueInput
    create: XOR<FeedCreateWithoutBranchInput, FeedUncheckedCreateWithoutBranchInput>
  }

  export type FeedCreateManyBranchInputEnvelope = {
    data: FeedCreateManyBranchInput | FeedCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type MedicineStockCreateWithoutBranchInput = {
    id?: string
    totalStock: number
    price: number
    medicineNameAdd: MedicineNameAddCreateNestedOneWithoutMedicineStockInput
    medicineCategory: MedicineNameCategoryCreateNestedOneWithoutMedicineStockInput
  }

  export type MedicineStockUncheckedCreateWithoutBranchInput = {
    id?: string
    genericName: string
    medicineName: string
    totalStock: number
    price: number
  }

  export type MedicineStockCreateOrConnectWithoutBranchInput = {
    where: MedicineStockWhereUniqueInput
    create: XOR<MedicineStockCreateWithoutBranchInput, MedicineStockUncheckedCreateWithoutBranchInput>
  }

  export type MedicineStockCreateManyBranchInputEnvelope = {
    data: MedicineStockCreateManyBranchInput | MedicineStockCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type MedicinePurchessCreateWithoutBranchInput = {
    id?: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
    medicineCategory: MedicineNameCategoryCreateNestedOneWithoutMedicinePurchessInput
    medicineNameAdd: MedicineNameAddCreateNestedOneWithoutMedicinePurchessInput
  }

  export type MedicinePurchessUncheckedCreateWithoutBranchInput = {
    id?: string
    genericName: string
    name: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
  }

  export type MedicinePurchessCreateOrConnectWithoutBranchInput = {
    where: MedicinePurchessWhereUniqueInput
    create: XOR<MedicinePurchessCreateWithoutBranchInput, MedicinePurchessUncheckedCreateWithoutBranchInput>
  }

  export type MedicinePurchessCreateManyBranchInputEnvelope = {
    data: MedicinePurchessCreateManyBranchInput | MedicinePurchessCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutBranchInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutBranchInput, CustomerUncheckedUpdateWithoutBranchInput>
    create: XOR<CustomerCreateWithoutBranchInput, CustomerUncheckedCreateWithoutBranchInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutBranchInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutBranchInput, CustomerUncheckedUpdateWithoutBranchInput>
  }

  export type CustomerUpdateManyWithWhereWithoutBranchInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutBranchInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    branchCode?: StringFilter<"Customer"> | string
    farmCode?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    farmType?: EnumCusttypeFilter<"Customer"> | $Enums.Custtype
    totalShed?: IntFilter<"Customer"> | number
    totalSquare?: IntFilter<"Customer"> | number
    capacity?: IntFilter<"Customer"> | number
    nid?: StringFilter<"Customer"> | string
  }

  export type EmployeeUpsertWithWhereUniqueWithoutBranchInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutBranchInput, EmployeeUncheckedUpdateWithoutBranchInput>
    create: XOR<EmployeeCreateWithoutBranchInput, EmployeeUncheckedCreateWithoutBranchInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutBranchInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutBranchInput, EmployeeUncheckedUpdateWithoutBranchInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutBranchInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutBranchInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    employeeId?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    workingLocation?: StringFilter<"Employee"> | string
    designation?: StringFilter<"Employee"> | string
    branchId?: StringNullableFilter<"Employee"> | string | null
  }

  export type BranchEmployeeUpsertWithWhereUniqueWithoutBranchInput = {
    where: BranchEmployeeWhereUniqueInput
    update: XOR<BranchEmployeeUpdateWithoutBranchInput, BranchEmployeeUncheckedUpdateWithoutBranchInput>
    create: XOR<BranchEmployeeCreateWithoutBranchInput, BranchEmployeeUncheckedCreateWithoutBranchInput>
  }

  export type BranchEmployeeUpdateWithWhereUniqueWithoutBranchInput = {
    where: BranchEmployeeWhereUniqueInput
    data: XOR<BranchEmployeeUpdateWithoutBranchInput, BranchEmployeeUncheckedUpdateWithoutBranchInput>
  }

  export type BranchEmployeeUpdateManyWithWhereWithoutBranchInput = {
    where: BranchEmployeeScalarWhereInput
    data: XOR<BranchEmployeeUpdateManyMutationInput, BranchEmployeeUncheckedUpdateManyWithoutBranchInput>
  }

  export type BranchEmployeeScalarWhereInput = {
    AND?: BranchEmployeeScalarWhereInput | BranchEmployeeScalarWhereInput[]
    OR?: BranchEmployeeScalarWhereInput[]
    NOT?: BranchEmployeeScalarWhereInput | BranchEmployeeScalarWhereInput[]
    id?: StringFilter<"BranchEmployee"> | string
    employeeId?: StringFilter<"BranchEmployee"> | string
    branchCode?: StringFilter<"BranchEmployee"> | string
  }

  export type FlockUpsertWithWhereUniqueWithoutBranchInput = {
    where: FlockWhereUniqueInput
    update: XOR<FlockUpdateWithoutBranchInput, FlockUncheckedUpdateWithoutBranchInput>
    create: XOR<FlockCreateWithoutBranchInput, FlockUncheckedCreateWithoutBranchInput>
  }

  export type FlockUpdateWithWhereUniqueWithoutBranchInput = {
    where: FlockWhereUniqueInput
    data: XOR<FlockUpdateWithoutBranchInput, FlockUncheckedUpdateWithoutBranchInput>
  }

  export type FlockUpdateManyWithWhereWithoutBranchInput = {
    where: FlockScalarWhereInput
    data: XOR<FlockUpdateManyMutationInput, FlockUncheckedUpdateManyWithoutBranchInput>
  }

  export type FlockScalarWhereInput = {
    AND?: FlockScalarWhereInput | FlockScalarWhereInput[]
    OR?: FlockScalarWhereInput[]
    NOT?: FlockScalarWhereInput | FlockScalarWhereInput[]
    id?: StringFilter<"Flock"> | string
    flockNumber?: IntFilter<"Flock"> | number
    flockStatus?: EnumFlockStatusFilter<"Flock"> | $Enums.FlockStatus
    startDate?: DateTimeFilter<"Flock"> | Date | string
    endDate?: DateTimeNullableFilter<"Flock"> | Date | string | null
    executiveId?: StringFilter<"Flock"> | string
    farmCode?: StringFilter<"Flock"> | string
    docName?: StringFilter<"Flock"> | string
    docQuantity?: IntFilter<"Flock"> | number
    approvedBy?: StringNullableFilter<"Flock"> | string | null
    branchCode?: StringFilter<"Flock"> | string
    totalFeedKg?: IntFilter<"Flock"> | number
    totalMedicine?: IntFilter<"Flock"> | number
    fcr?: FloatFilter<"Flock"> | number
    totalSellBirds?: IntFilter<"Flock"> | number
    mortality?: IntFilter<"Flock"> | number
  }

  export type FeedUpsertWithWhereUniqueWithoutBranchInput = {
    where: FeedWhereUniqueInput
    update: XOR<FeedUpdateWithoutBranchInput, FeedUncheckedUpdateWithoutBranchInput>
    create: XOR<FeedCreateWithoutBranchInput, FeedUncheckedCreateWithoutBranchInput>
  }

  export type FeedUpdateWithWhereUniqueWithoutBranchInput = {
    where: FeedWhereUniqueInput
    data: XOR<FeedUpdateWithoutBranchInput, FeedUncheckedUpdateWithoutBranchInput>
  }

  export type FeedUpdateManyWithWhereWithoutBranchInput = {
    where: FeedScalarWhereInput
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyWithoutBranchInput>
  }

  export type FeedScalarWhereInput = {
    AND?: FeedScalarWhereInput | FeedScalarWhereInput[]
    OR?: FeedScalarWhereInput[]
    NOT?: FeedScalarWhereInput | FeedScalarWhereInput[]
    id?: StringFilter<"Feed"> | string
    feedName?: StringFilter<"Feed"> | string
    stock?: IntFilter<"Feed"> | number
    branchCode?: StringNullableFilter<"Feed"> | string | null
  }

  export type MedicineStockUpsertWithWhereUniqueWithoutBranchInput = {
    where: MedicineStockWhereUniqueInput
    update: XOR<MedicineStockUpdateWithoutBranchInput, MedicineStockUncheckedUpdateWithoutBranchInput>
    create: XOR<MedicineStockCreateWithoutBranchInput, MedicineStockUncheckedCreateWithoutBranchInput>
  }

  export type MedicineStockUpdateWithWhereUniqueWithoutBranchInput = {
    where: MedicineStockWhereUniqueInput
    data: XOR<MedicineStockUpdateWithoutBranchInput, MedicineStockUncheckedUpdateWithoutBranchInput>
  }

  export type MedicineStockUpdateManyWithWhereWithoutBranchInput = {
    where: MedicineStockScalarWhereInput
    data: XOR<MedicineStockUpdateManyMutationInput, MedicineStockUncheckedUpdateManyWithoutBranchInput>
  }

  export type MedicineStockScalarWhereInput = {
    AND?: MedicineStockScalarWhereInput | MedicineStockScalarWhereInput[]
    OR?: MedicineStockScalarWhereInput[]
    NOT?: MedicineStockScalarWhereInput | MedicineStockScalarWhereInput[]
    id?: StringFilter<"MedicineStock"> | string
    genericName?: StringFilter<"MedicineStock"> | string
    medicineName?: StringFilter<"MedicineStock"> | string
    branchCode?: StringFilter<"MedicineStock"> | string
    totalStock?: IntFilter<"MedicineStock"> | number
    price?: IntFilter<"MedicineStock"> | number
  }

  export type MedicinePurchessUpsertWithWhereUniqueWithoutBranchInput = {
    where: MedicinePurchessWhereUniqueInput
    update: XOR<MedicinePurchessUpdateWithoutBranchInput, MedicinePurchessUncheckedUpdateWithoutBranchInput>
    create: XOR<MedicinePurchessCreateWithoutBranchInput, MedicinePurchessUncheckedCreateWithoutBranchInput>
  }

  export type MedicinePurchessUpdateWithWhereUniqueWithoutBranchInput = {
    where: MedicinePurchessWhereUniqueInput
    data: XOR<MedicinePurchessUpdateWithoutBranchInput, MedicinePurchessUncheckedUpdateWithoutBranchInput>
  }

  export type MedicinePurchessUpdateManyWithWhereWithoutBranchInput = {
    where: MedicinePurchessScalarWhereInput
    data: XOR<MedicinePurchessUpdateManyMutationInput, MedicinePurchessUncheckedUpdateManyWithoutBranchInput>
  }

  export type MedicinePurchessScalarWhereInput = {
    AND?: MedicinePurchessScalarWhereInput | MedicinePurchessScalarWhereInput[]
    OR?: MedicinePurchessScalarWhereInput[]
    NOT?: MedicinePurchessScalarWhereInput | MedicinePurchessScalarWhereInput[]
    id?: StringFilter<"MedicinePurchess"> | string
    genericName?: StringFilter<"MedicinePurchess"> | string
    name?: StringFilter<"MedicinePurchess"> | string
    purchaseUnitPrice?: IntFilter<"MedicinePurchess"> | number
    sellUnitPrice?: IntFilter<"MedicinePurchess"> | number
    purchaseQuantity?: IntFilter<"MedicinePurchess"> | number
    mfgDate?: StringFilter<"MedicinePurchess"> | string
    expDate?: StringFilter<"MedicinePurchess"> | string
    bonusQuantity?: IntNullableFilter<"MedicinePurchess"> | number | null
    purchaseTotalPrice?: IntFilter<"MedicinePurchess"> | number
    supplierInfo?: StringFilter<"MedicinePurchess"> | string
    branchCode?: StringFilter<"MedicinePurchess"> | string
  }

  export type BranchCreateWithoutCustomersInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    employees?: EmployeeCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeCreateNestedManyWithoutBranchInput
    flocks?: FlockCreateNestedManyWithoutBranchInput
    Feed?: FeedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutCustomersInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    employees?: EmployeeUncheckedCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeUncheckedCreateNestedManyWithoutBranchInput
    flocks?: FlockUncheckedCreateNestedManyWithoutBranchInput
    Feed?: FeedUncheckedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutCustomersInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutCustomersInput, BranchUncheckedCreateWithoutCustomersInput>
  }

  export type AddressCreateWithoutCustomerInput = {
    id?: string
    village: string
    post: string
    union?: string | null
    thana?: string | null
    upazila: string
    phoneNumber: string
    city: string
    employee?: EmployeeCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutCustomerInput = {
    id?: string
    village: string
    post: string
    union?: string | null
    thana?: string | null
    upazila: string
    phoneNumber: string
    city: string
    employeeId?: string | null
  }

  export type AddressCreateOrConnectWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type FlockCreateWithoutCustomerInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
    employee: EmployeeCreateNestedOneWithoutFlocksInput
    branch: BranchCreateNestedOneWithoutFlocksInput
  }

  export type FlockUncheckedCreateWithoutCustomerInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    executiveId: string
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    branchCode: string
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
  }

  export type FlockCreateOrConnectWithoutCustomerInput = {
    where: FlockWhereUniqueInput
    create: XOR<FlockCreateWithoutCustomerInput, FlockUncheckedCreateWithoutCustomerInput>
  }

  export type FlockCreateManyCustomerInputEnvelope = {
    data: FlockCreateManyCustomerInput | FlockCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutCustomersInput = {
    update: XOR<BranchUpdateWithoutCustomersInput, BranchUncheckedUpdateWithoutCustomersInput>
    create: XOR<BranchCreateWithoutCustomersInput, BranchUncheckedCreateWithoutCustomersInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutCustomersInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutCustomersInput, BranchUncheckedUpdateWithoutCustomersInput>
  }

  export type BranchUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUpdateManyWithoutBranchNestedInput
    flocks?: FlockUpdateManyWithoutBranchNestedInput
    Feed?: FeedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUncheckedUpdateManyWithoutBranchNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutBranchNestedInput
    Feed?: FeedUncheckedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type AddressUpsertWithoutCustomerInput = {
    update: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutCustomerInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
  }

  export type AddressUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    post?: StringFieldUpdateOperationsInput | string
    union?: NullableStringFieldUpdateOperationsInput | string | null
    thana?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    post?: StringFieldUpdateOperationsInput | string
    union?: NullableStringFieldUpdateOperationsInput | string | null
    thana?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlockUpsertWithWhereUniqueWithoutCustomerInput = {
    where: FlockWhereUniqueInput
    update: XOR<FlockUpdateWithoutCustomerInput, FlockUncheckedUpdateWithoutCustomerInput>
    create: XOR<FlockCreateWithoutCustomerInput, FlockUncheckedCreateWithoutCustomerInput>
  }

  export type FlockUpdateWithWhereUniqueWithoutCustomerInput = {
    where: FlockWhereUniqueInput
    data: XOR<FlockUpdateWithoutCustomerInput, FlockUncheckedUpdateWithoutCustomerInput>
  }

  export type FlockUpdateManyWithWhereWithoutCustomerInput = {
    where: FlockScalarWhereInput
    data: XOR<FlockUpdateManyMutationInput, FlockUncheckedUpdateManyWithoutCustomerInput>
  }

  export type EmployeeCreateWithoutAddressInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branch?: BranchCreateNestedOneWithoutEmployeesInput
    branchEmployees?: BranchEmployeeCreateNestedManyWithoutEmployeeInput
    flocks?: FlockCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutAddressInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branchId?: string | null
    branchEmployees?: BranchEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
    flocks?: FlockUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutAddressInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
  }

  export type CustomerCreateWithoutAddressInput = {
    id?: string
    farmCode: string
    name: string
    farmType: $Enums.Custtype
    totalShed: number
    totalSquare: number
    capacity: number
    nid: string
    branch: BranchCreateNestedOneWithoutCustomersInput
    flocks?: FlockCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutAddressInput = {
    id?: string
    branchCode: string
    farmCode: string
    name: string
    farmType: $Enums.Custtype
    totalShed: number
    totalSquare: number
    capacity: number
    nid: string
    flocks?: FlockUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutAddressInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAddressInput, CustomerUncheckedCreateWithoutAddressInput>
  }

  export type EmployeeUpsertWithoutAddressInput = {
    update: XOR<EmployeeUpdateWithoutAddressInput, EmployeeUncheckedUpdateWithoutAddressInput>
    create: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAddressInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAddressInput, EmployeeUncheckedUpdateWithoutAddressInput>
  }

  export type EmployeeUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneWithoutEmployeesNestedInput
    branchEmployees?: BranchEmployeeUpdateManyWithoutEmployeeNestedInput
    flocks?: FlockUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    branchEmployees?: BranchEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type CustomerUpsertWithoutAddressInput = {
    update: XOR<CustomerUpdateWithoutAddressInput, CustomerUncheckedUpdateWithoutAddressInput>
    create: XOR<CustomerCreateWithoutAddressInput, CustomerUncheckedCreateWithoutAddressInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAddressInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAddressInput, CustomerUncheckedUpdateWithoutAddressInput>
  }

  export type CustomerUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    farmType?: EnumCusttypeFieldUpdateOperationsInput | $Enums.Custtype
    totalShed?: IntFieldUpdateOperationsInput | number
    totalSquare?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nid?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneRequiredWithoutCustomersNestedInput
    flocks?: FlockUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    farmType?: EnumCusttypeFieldUpdateOperationsInput | $Enums.Custtype
    totalShed?: IntFieldUpdateOperationsInput | number
    totalSquare?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nid?: StringFieldUpdateOperationsInput | string
    flocks?: FlockUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BranchCreateWithoutBranchEmployeesInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerCreateNestedManyWithoutBranchInput
    employees?: EmployeeCreateNestedManyWithoutBranchInput
    flocks?: FlockCreateNestedManyWithoutBranchInput
    Feed?: FeedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutBranchEmployeesInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerUncheckedCreateNestedManyWithoutBranchInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutBranchInput
    flocks?: FlockUncheckedCreateNestedManyWithoutBranchInput
    Feed?: FeedUncheckedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutBranchEmployeesInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutBranchEmployeesInput, BranchUncheckedCreateWithoutBranchEmployeesInput>
  }

  export type EmployeeCreateWithoutBranchEmployeesInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branch?: BranchCreateNestedOneWithoutEmployeesInput
    address?: AddressCreateNestedOneWithoutEmployeeInput
    flocks?: FlockCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutBranchEmployeesInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branchId?: string | null
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
    flocks?: FlockUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutBranchEmployeesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutBranchEmployeesInput, EmployeeUncheckedCreateWithoutBranchEmployeesInput>
  }

  export type BranchUpsertWithoutBranchEmployeesInput = {
    update: XOR<BranchUpdateWithoutBranchEmployeesInput, BranchUncheckedUpdateWithoutBranchEmployeesInput>
    create: XOR<BranchCreateWithoutBranchEmployeesInput, BranchUncheckedCreateWithoutBranchEmployeesInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutBranchEmployeesInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutBranchEmployeesInput, BranchUncheckedUpdateWithoutBranchEmployeesInput>
  }

  export type BranchUpdateWithoutBranchEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUpdateManyWithoutBranchNestedInput
    flocks?: FlockUpdateManyWithoutBranchNestedInput
    Feed?: FeedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutBranchEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutBranchNestedInput
    Feed?: FeedUncheckedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type EmployeeUpsertWithoutBranchEmployeesInput = {
    update: XOR<EmployeeUpdateWithoutBranchEmployeesInput, EmployeeUncheckedUpdateWithoutBranchEmployeesInput>
    create: XOR<EmployeeCreateWithoutBranchEmployeesInput, EmployeeUncheckedCreateWithoutBranchEmployeesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutBranchEmployeesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutBranchEmployeesInput, EmployeeUncheckedUpdateWithoutBranchEmployeesInput>
  }

  export type EmployeeUpdateWithoutBranchEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneWithoutEmployeesNestedInput
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    flocks?: FlockUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutBranchEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type BranchCreateWithoutEmployeesInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeCreateNestedManyWithoutBranchInput
    flocks?: FlockCreateNestedManyWithoutBranchInput
    Feed?: FeedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutEmployeesInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerUncheckedCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeUncheckedCreateNestedManyWithoutBranchInput
    flocks?: FlockUncheckedCreateNestedManyWithoutBranchInput
    Feed?: FeedUncheckedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutEmployeesInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutEmployeesInput, BranchUncheckedCreateWithoutEmployeesInput>
  }

  export type BranchEmployeeCreateWithoutEmployeeInput = {
    id?: string
    branch: BranchCreateNestedOneWithoutBranchEmployeesInput
  }

  export type BranchEmployeeUncheckedCreateWithoutEmployeeInput = {
    id?: string
    branchCode: string
  }

  export type BranchEmployeeCreateOrConnectWithoutEmployeeInput = {
    where: BranchEmployeeWhereUniqueInput
    create: XOR<BranchEmployeeCreateWithoutEmployeeInput, BranchEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type BranchEmployeeCreateManyEmployeeInputEnvelope = {
    data: BranchEmployeeCreateManyEmployeeInput | BranchEmployeeCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutEmployeeInput = {
    id?: string
    village: string
    post: string
    union?: string | null
    thana?: string | null
    upazila: string
    phoneNumber: string
    city: string
    customer?: CustomerCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutEmployeeInput = {
    id?: string
    village: string
    post: string
    union?: string | null
    thana?: string | null
    upazila: string
    phoneNumber: string
    city: string
    farmCode?: string | null
  }

  export type AddressCreateOrConnectWithoutEmployeeInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
  }

  export type FlockCreateWithoutEmployeeInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
    customer: CustomerCreateNestedOneWithoutFlocksInput
    branch: BranchCreateNestedOneWithoutFlocksInput
  }

  export type FlockUncheckedCreateWithoutEmployeeInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    farmCode: string
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    branchCode: string
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
  }

  export type FlockCreateOrConnectWithoutEmployeeInput = {
    where: FlockWhereUniqueInput
    create: XOR<FlockCreateWithoutEmployeeInput, FlockUncheckedCreateWithoutEmployeeInput>
  }

  export type FlockCreateManyEmployeeInputEnvelope = {
    data: FlockCreateManyEmployeeInput | FlockCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutEmployeesInput = {
    update: XOR<BranchUpdateWithoutEmployeesInput, BranchUncheckedUpdateWithoutEmployeesInput>
    create: XOR<BranchCreateWithoutEmployeesInput, BranchUncheckedCreateWithoutEmployeesInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutEmployeesInput, BranchUncheckedUpdateWithoutEmployeesInput>
  }

  export type BranchUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUpdateManyWithoutBranchNestedInput
    flocks?: FlockUpdateManyWithoutBranchNestedInput
    Feed?: FeedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUncheckedUpdateManyWithoutBranchNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutBranchNestedInput
    Feed?: FeedUncheckedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchEmployeeUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: BranchEmployeeWhereUniqueInput
    update: XOR<BranchEmployeeUpdateWithoutEmployeeInput, BranchEmployeeUncheckedUpdateWithoutEmployeeInput>
    create: XOR<BranchEmployeeCreateWithoutEmployeeInput, BranchEmployeeUncheckedCreateWithoutEmployeeInput>
  }

  export type BranchEmployeeUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: BranchEmployeeWhereUniqueInput
    data: XOR<BranchEmployeeUpdateWithoutEmployeeInput, BranchEmployeeUncheckedUpdateWithoutEmployeeInput>
  }

  export type BranchEmployeeUpdateManyWithWhereWithoutEmployeeInput = {
    where: BranchEmployeeScalarWhereInput
    data: XOR<BranchEmployeeUpdateManyMutationInput, BranchEmployeeUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type AddressUpsertWithoutEmployeeInput = {
    update: XOR<AddressUpdateWithoutEmployeeInput, AddressUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutEmployeeInput, AddressUncheckedUpdateWithoutEmployeeInput>
  }

  export type AddressUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    post?: StringFieldUpdateOperationsInput | string
    union?: NullableStringFieldUpdateOperationsInput | string | null
    thana?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    post?: StringFieldUpdateOperationsInput | string
    union?: NullableStringFieldUpdateOperationsInput | string | null
    thana?: NullableStringFieldUpdateOperationsInput | string | null
    upazila?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    farmCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlockUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: FlockWhereUniqueInput
    update: XOR<FlockUpdateWithoutEmployeeInput, FlockUncheckedUpdateWithoutEmployeeInput>
    create: XOR<FlockCreateWithoutEmployeeInput, FlockUncheckedCreateWithoutEmployeeInput>
  }

  export type FlockUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: FlockWhereUniqueInput
    data: XOR<FlockUpdateWithoutEmployeeInput, FlockUncheckedUpdateWithoutEmployeeInput>
  }

  export type FlockUpdateManyWithWhereWithoutEmployeeInput = {
    where: FlockScalarWhereInput
    data: XOR<FlockUpdateManyMutationInput, FlockUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type CustomerCreateWithoutFlocksInput = {
    id?: string
    farmCode: string
    name: string
    farmType: $Enums.Custtype
    totalShed: number
    totalSquare: number
    capacity: number
    nid: string
    branch: BranchCreateNestedOneWithoutCustomersInput
    address?: AddressCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutFlocksInput = {
    id?: string
    branchCode: string
    farmCode: string
    name: string
    farmType: $Enums.Custtype
    totalShed: number
    totalSquare: number
    capacity: number
    nid: string
    address?: AddressUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutFlocksInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutFlocksInput, CustomerUncheckedCreateWithoutFlocksInput>
  }

  export type EmployeeCreateWithoutFlocksInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branch?: BranchCreateNestedOneWithoutEmployeesInput
    branchEmployees?: BranchEmployeeCreateNestedManyWithoutEmployeeInput
    address?: AddressCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutFlocksInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
    branchId?: string | null
    branchEmployees?: BranchEmployeeUncheckedCreateNestedManyWithoutEmployeeInput
    address?: AddressUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutFlocksInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutFlocksInput, EmployeeUncheckedCreateWithoutFlocksInput>
  }

  export type BranchCreateWithoutFlocksInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerCreateNestedManyWithoutBranchInput
    employees?: EmployeeCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeCreateNestedManyWithoutBranchInput
    Feed?: FeedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutFlocksInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerUncheckedCreateNestedManyWithoutBranchInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeUncheckedCreateNestedManyWithoutBranchInput
    Feed?: FeedUncheckedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutFlocksInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutFlocksInput, BranchUncheckedCreateWithoutFlocksInput>
  }

  export type CustomerUpsertWithoutFlocksInput = {
    update: XOR<CustomerUpdateWithoutFlocksInput, CustomerUncheckedUpdateWithoutFlocksInput>
    create: XOR<CustomerCreateWithoutFlocksInput, CustomerUncheckedCreateWithoutFlocksInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutFlocksInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutFlocksInput, CustomerUncheckedUpdateWithoutFlocksInput>
  }

  export type CustomerUpdateWithoutFlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    farmType?: EnumCusttypeFieldUpdateOperationsInput | $Enums.Custtype
    totalShed?: IntFieldUpdateOperationsInput | number
    totalSquare?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nid?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneRequiredWithoutCustomersNestedInput
    address?: AddressUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutFlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    farmType?: EnumCusttypeFieldUpdateOperationsInput | $Enums.Custtype
    totalShed?: IntFieldUpdateOperationsInput | number
    totalSquare?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nid?: StringFieldUpdateOperationsInput | string
    address?: AddressUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type EmployeeUpsertWithoutFlocksInput = {
    update: XOR<EmployeeUpdateWithoutFlocksInput, EmployeeUncheckedUpdateWithoutFlocksInput>
    create: XOR<EmployeeCreateWithoutFlocksInput, EmployeeUncheckedCreateWithoutFlocksInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutFlocksInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutFlocksInput, EmployeeUncheckedUpdateWithoutFlocksInput>
  }

  export type EmployeeUpdateWithoutFlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneWithoutEmployeesNestedInput
    branchEmployees?: BranchEmployeeUpdateManyWithoutEmployeeNestedInput
    address?: AddressUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutFlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    branchEmployees?: BranchEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type BranchUpsertWithoutFlocksInput = {
    update: XOR<BranchUpdateWithoutFlocksInput, BranchUncheckedUpdateWithoutFlocksInput>
    create: XOR<BranchCreateWithoutFlocksInput, BranchUncheckedCreateWithoutFlocksInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutFlocksInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutFlocksInput, BranchUncheckedUpdateWithoutFlocksInput>
  }

  export type BranchUpdateWithoutFlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUpdateManyWithoutBranchNestedInput
    Feed?: FeedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutFlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUncheckedUpdateManyWithoutBranchNestedInput
    Feed?: FeedUncheckedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type FeedCreateWithoutFeedNameCategoryInput = {
    id?: string
    stock: number
    branch?: BranchCreateNestedOneWithoutFeedInput
  }

  export type FeedUncheckedCreateWithoutFeedNameCategoryInput = {
    id?: string
    stock: number
    branchCode?: string | null
  }

  export type FeedCreateOrConnectWithoutFeedNameCategoryInput = {
    where: FeedWhereUniqueInput
    create: XOR<FeedCreateWithoutFeedNameCategoryInput, FeedUncheckedCreateWithoutFeedNameCategoryInput>
  }

  export type FeedCreateManyFeedNameCategoryInputEnvelope = {
    data: FeedCreateManyFeedNameCategoryInput | FeedCreateManyFeedNameCategoryInput[]
    skipDuplicates?: boolean
  }

  export type FeedUpsertWithWhereUniqueWithoutFeedNameCategoryInput = {
    where: FeedWhereUniqueInput
    update: XOR<FeedUpdateWithoutFeedNameCategoryInput, FeedUncheckedUpdateWithoutFeedNameCategoryInput>
    create: XOR<FeedCreateWithoutFeedNameCategoryInput, FeedUncheckedCreateWithoutFeedNameCategoryInput>
  }

  export type FeedUpdateWithWhereUniqueWithoutFeedNameCategoryInput = {
    where: FeedWhereUniqueInput
    data: XOR<FeedUpdateWithoutFeedNameCategoryInput, FeedUncheckedUpdateWithoutFeedNameCategoryInput>
  }

  export type FeedUpdateManyWithWhereWithoutFeedNameCategoryInput = {
    where: FeedScalarWhereInput
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyWithoutFeedNameCategoryInput>
  }

  export type FeedNameCategoryCreateWithoutFeedsInput = {
    id?: string
    feedName: string
    feedCodeNumber: number
  }

  export type FeedNameCategoryUncheckedCreateWithoutFeedsInput = {
    id?: string
    feedName: string
    feedCodeNumber: number
  }

  export type FeedNameCategoryCreateOrConnectWithoutFeedsInput = {
    where: FeedNameCategoryWhereUniqueInput
    create: XOR<FeedNameCategoryCreateWithoutFeedsInput, FeedNameCategoryUncheckedCreateWithoutFeedsInput>
  }

  export type BranchCreateWithoutFeedInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerCreateNestedManyWithoutBranchInput
    employees?: EmployeeCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeCreateNestedManyWithoutBranchInput
    flocks?: FlockCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutFeedInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerUncheckedCreateNestedManyWithoutBranchInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeUncheckedCreateNestedManyWithoutBranchInput
    flocks?: FlockUncheckedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutFeedInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutFeedInput, BranchUncheckedCreateWithoutFeedInput>
  }

  export type FeedNameCategoryUpsertWithoutFeedsInput = {
    update: XOR<FeedNameCategoryUpdateWithoutFeedsInput, FeedNameCategoryUncheckedUpdateWithoutFeedsInput>
    create: XOR<FeedNameCategoryCreateWithoutFeedsInput, FeedNameCategoryUncheckedCreateWithoutFeedsInput>
    where?: FeedNameCategoryWhereInput
  }

  export type FeedNameCategoryUpdateToOneWithWhereWithoutFeedsInput = {
    where?: FeedNameCategoryWhereInput
    data: XOR<FeedNameCategoryUpdateWithoutFeedsInput, FeedNameCategoryUncheckedUpdateWithoutFeedsInput>
  }

  export type FeedNameCategoryUpdateWithoutFeedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedName?: StringFieldUpdateOperationsInput | string
    feedCodeNumber?: IntFieldUpdateOperationsInput | number
  }

  export type FeedNameCategoryUncheckedUpdateWithoutFeedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedName?: StringFieldUpdateOperationsInput | string
    feedCodeNumber?: IntFieldUpdateOperationsInput | number
  }

  export type BranchUpsertWithoutFeedInput = {
    update: XOR<BranchUpdateWithoutFeedInput, BranchUncheckedUpdateWithoutFeedInput>
    create: XOR<BranchCreateWithoutFeedInput, BranchUncheckedCreateWithoutFeedInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutFeedInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutFeedInput, BranchUncheckedUpdateWithoutFeedInput>
  }

  export type BranchUpdateWithoutFeedInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUpdateManyWithoutBranchNestedInput
    flocks?: FlockUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutFeedInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUncheckedUpdateManyWithoutBranchNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type MedicineNameAddCreateWithoutMedicineCategoryInput = {
    id?: string
    name: string
    conpany: string
    MedicineStock?: MedicineStockCreateNestedManyWithoutMedicineNameAddInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutMedicineNameAddInput
  }

  export type MedicineNameAddUncheckedCreateWithoutMedicineCategoryInput = {
    id?: string
    name: string
    conpany: string
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutMedicineNameAddInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutMedicineNameAddInput
  }

  export type MedicineNameAddCreateOrConnectWithoutMedicineCategoryInput = {
    where: MedicineNameAddWhereUniqueInput
    create: XOR<MedicineNameAddCreateWithoutMedicineCategoryInput, MedicineNameAddUncheckedCreateWithoutMedicineCategoryInput>
  }

  export type MedicineNameAddCreateManyMedicineCategoryInputEnvelope = {
    data: MedicineNameAddCreateManyMedicineCategoryInput | MedicineNameAddCreateManyMedicineCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MedicineStockCreateWithoutMedicineCategoryInput = {
    id?: string
    totalStock: number
    price: number
    medicineNameAdd: MedicineNameAddCreateNestedOneWithoutMedicineStockInput
    branch: BranchCreateNestedOneWithoutMedicineStockInput
  }

  export type MedicineStockUncheckedCreateWithoutMedicineCategoryInput = {
    id?: string
    medicineName: string
    branchCode: string
    totalStock: number
    price: number
  }

  export type MedicineStockCreateOrConnectWithoutMedicineCategoryInput = {
    where: MedicineStockWhereUniqueInput
    create: XOR<MedicineStockCreateWithoutMedicineCategoryInput, MedicineStockUncheckedCreateWithoutMedicineCategoryInput>
  }

  export type MedicineStockCreateManyMedicineCategoryInputEnvelope = {
    data: MedicineStockCreateManyMedicineCategoryInput | MedicineStockCreateManyMedicineCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MedicinePurchessCreateWithoutMedicineCategoryInput = {
    id?: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
    medicineNameAdd: MedicineNameAddCreateNestedOneWithoutMedicinePurchessInput
    branch: BranchCreateNestedOneWithoutMedicinePurchessInput
  }

  export type MedicinePurchessUncheckedCreateWithoutMedicineCategoryInput = {
    id?: string
    name: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
    branchCode: string
  }

  export type MedicinePurchessCreateOrConnectWithoutMedicineCategoryInput = {
    where: MedicinePurchessWhereUniqueInput
    create: XOR<MedicinePurchessCreateWithoutMedicineCategoryInput, MedicinePurchessUncheckedCreateWithoutMedicineCategoryInput>
  }

  export type MedicinePurchessCreateManyMedicineCategoryInputEnvelope = {
    data: MedicinePurchessCreateManyMedicineCategoryInput | MedicinePurchessCreateManyMedicineCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MedicineNameAddUpsertWithWhereUniqueWithoutMedicineCategoryInput = {
    where: MedicineNameAddWhereUniqueInput
    update: XOR<MedicineNameAddUpdateWithoutMedicineCategoryInput, MedicineNameAddUncheckedUpdateWithoutMedicineCategoryInput>
    create: XOR<MedicineNameAddCreateWithoutMedicineCategoryInput, MedicineNameAddUncheckedCreateWithoutMedicineCategoryInput>
  }

  export type MedicineNameAddUpdateWithWhereUniqueWithoutMedicineCategoryInput = {
    where: MedicineNameAddWhereUniqueInput
    data: XOR<MedicineNameAddUpdateWithoutMedicineCategoryInput, MedicineNameAddUncheckedUpdateWithoutMedicineCategoryInput>
  }

  export type MedicineNameAddUpdateManyWithWhereWithoutMedicineCategoryInput = {
    where: MedicineNameAddScalarWhereInput
    data: XOR<MedicineNameAddUpdateManyMutationInput, MedicineNameAddUncheckedUpdateManyWithoutMedicineCategoryInput>
  }

  export type MedicineNameAddScalarWhereInput = {
    AND?: MedicineNameAddScalarWhereInput | MedicineNameAddScalarWhereInput[]
    OR?: MedicineNameAddScalarWhereInput[]
    NOT?: MedicineNameAddScalarWhereInput | MedicineNameAddScalarWhereInput[]
    id?: StringFilter<"MedicineNameAdd"> | string
    name?: StringFilter<"MedicineNameAdd"> | string
    conpany?: StringFilter<"MedicineNameAdd"> | string
    genericName?: StringFilter<"MedicineNameAdd"> | string
  }

  export type MedicineStockUpsertWithWhereUniqueWithoutMedicineCategoryInput = {
    where: MedicineStockWhereUniqueInput
    update: XOR<MedicineStockUpdateWithoutMedicineCategoryInput, MedicineStockUncheckedUpdateWithoutMedicineCategoryInput>
    create: XOR<MedicineStockCreateWithoutMedicineCategoryInput, MedicineStockUncheckedCreateWithoutMedicineCategoryInput>
  }

  export type MedicineStockUpdateWithWhereUniqueWithoutMedicineCategoryInput = {
    where: MedicineStockWhereUniqueInput
    data: XOR<MedicineStockUpdateWithoutMedicineCategoryInput, MedicineStockUncheckedUpdateWithoutMedicineCategoryInput>
  }

  export type MedicineStockUpdateManyWithWhereWithoutMedicineCategoryInput = {
    where: MedicineStockScalarWhereInput
    data: XOR<MedicineStockUpdateManyMutationInput, MedicineStockUncheckedUpdateManyWithoutMedicineCategoryInput>
  }

  export type MedicinePurchessUpsertWithWhereUniqueWithoutMedicineCategoryInput = {
    where: MedicinePurchessWhereUniqueInput
    update: XOR<MedicinePurchessUpdateWithoutMedicineCategoryInput, MedicinePurchessUncheckedUpdateWithoutMedicineCategoryInput>
    create: XOR<MedicinePurchessCreateWithoutMedicineCategoryInput, MedicinePurchessUncheckedCreateWithoutMedicineCategoryInput>
  }

  export type MedicinePurchessUpdateWithWhereUniqueWithoutMedicineCategoryInput = {
    where: MedicinePurchessWhereUniqueInput
    data: XOR<MedicinePurchessUpdateWithoutMedicineCategoryInput, MedicinePurchessUncheckedUpdateWithoutMedicineCategoryInput>
  }

  export type MedicinePurchessUpdateManyWithWhereWithoutMedicineCategoryInput = {
    where: MedicinePurchessScalarWhereInput
    data: XOR<MedicinePurchessUpdateManyMutationInput, MedicinePurchessUncheckedUpdateManyWithoutMedicineCategoryInput>
  }

  export type MedicineNameCategoryCreateWithoutMedicineNameAddInput = {
    id?: string
    genericName: string
    MedicineStock?: MedicineStockCreateNestedManyWithoutMedicineCategoryInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutMedicineCategoryInput
  }

  export type MedicineNameCategoryUncheckedCreateWithoutMedicineNameAddInput = {
    id?: string
    genericName: string
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutMedicineCategoryInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutMedicineCategoryInput
  }

  export type MedicineNameCategoryCreateOrConnectWithoutMedicineNameAddInput = {
    where: MedicineNameCategoryWhereUniqueInput
    create: XOR<MedicineNameCategoryCreateWithoutMedicineNameAddInput, MedicineNameCategoryUncheckedCreateWithoutMedicineNameAddInput>
  }

  export type MedicineStockCreateWithoutMedicineNameAddInput = {
    id?: string
    totalStock: number
    price: number
    medicineCategory: MedicineNameCategoryCreateNestedOneWithoutMedicineStockInput
    branch: BranchCreateNestedOneWithoutMedicineStockInput
  }

  export type MedicineStockUncheckedCreateWithoutMedicineNameAddInput = {
    id?: string
    genericName: string
    branchCode: string
    totalStock: number
    price: number
  }

  export type MedicineStockCreateOrConnectWithoutMedicineNameAddInput = {
    where: MedicineStockWhereUniqueInput
    create: XOR<MedicineStockCreateWithoutMedicineNameAddInput, MedicineStockUncheckedCreateWithoutMedicineNameAddInput>
  }

  export type MedicineStockCreateManyMedicineNameAddInputEnvelope = {
    data: MedicineStockCreateManyMedicineNameAddInput | MedicineStockCreateManyMedicineNameAddInput[]
    skipDuplicates?: boolean
  }

  export type MedicinePurchessCreateWithoutMedicineNameAddInput = {
    id?: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
    medicineCategory: MedicineNameCategoryCreateNestedOneWithoutMedicinePurchessInput
    branch: BranchCreateNestedOneWithoutMedicinePurchessInput
  }

  export type MedicinePurchessUncheckedCreateWithoutMedicineNameAddInput = {
    id?: string
    genericName: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
    branchCode: string
  }

  export type MedicinePurchessCreateOrConnectWithoutMedicineNameAddInput = {
    where: MedicinePurchessWhereUniqueInput
    create: XOR<MedicinePurchessCreateWithoutMedicineNameAddInput, MedicinePurchessUncheckedCreateWithoutMedicineNameAddInput>
  }

  export type MedicinePurchessCreateManyMedicineNameAddInputEnvelope = {
    data: MedicinePurchessCreateManyMedicineNameAddInput | MedicinePurchessCreateManyMedicineNameAddInput[]
    skipDuplicates?: boolean
  }

  export type MedicineNameCategoryUpsertWithoutMedicineNameAddInput = {
    update: XOR<MedicineNameCategoryUpdateWithoutMedicineNameAddInput, MedicineNameCategoryUncheckedUpdateWithoutMedicineNameAddInput>
    create: XOR<MedicineNameCategoryCreateWithoutMedicineNameAddInput, MedicineNameCategoryUncheckedCreateWithoutMedicineNameAddInput>
    where?: MedicineNameCategoryWhereInput
  }

  export type MedicineNameCategoryUpdateToOneWithWhereWithoutMedicineNameAddInput = {
    where?: MedicineNameCategoryWhereInput
    data: XOR<MedicineNameCategoryUpdateWithoutMedicineNameAddInput, MedicineNameCategoryUncheckedUpdateWithoutMedicineNameAddInput>
  }

  export type MedicineNameCategoryUpdateWithoutMedicineNameAddInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    MedicineStock?: MedicineStockUpdateManyWithoutMedicineCategoryNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutMedicineCategoryNestedInput
  }

  export type MedicineNameCategoryUncheckedUpdateWithoutMedicineNameAddInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutMedicineCategoryNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutMedicineCategoryNestedInput
  }

  export type MedicineStockUpsertWithWhereUniqueWithoutMedicineNameAddInput = {
    where: MedicineStockWhereUniqueInput
    update: XOR<MedicineStockUpdateWithoutMedicineNameAddInput, MedicineStockUncheckedUpdateWithoutMedicineNameAddInput>
    create: XOR<MedicineStockCreateWithoutMedicineNameAddInput, MedicineStockUncheckedCreateWithoutMedicineNameAddInput>
  }

  export type MedicineStockUpdateWithWhereUniqueWithoutMedicineNameAddInput = {
    where: MedicineStockWhereUniqueInput
    data: XOR<MedicineStockUpdateWithoutMedicineNameAddInput, MedicineStockUncheckedUpdateWithoutMedicineNameAddInput>
  }

  export type MedicineStockUpdateManyWithWhereWithoutMedicineNameAddInput = {
    where: MedicineStockScalarWhereInput
    data: XOR<MedicineStockUpdateManyMutationInput, MedicineStockUncheckedUpdateManyWithoutMedicineNameAddInput>
  }

  export type MedicinePurchessUpsertWithWhereUniqueWithoutMedicineNameAddInput = {
    where: MedicinePurchessWhereUniqueInput
    update: XOR<MedicinePurchessUpdateWithoutMedicineNameAddInput, MedicinePurchessUncheckedUpdateWithoutMedicineNameAddInput>
    create: XOR<MedicinePurchessCreateWithoutMedicineNameAddInput, MedicinePurchessUncheckedCreateWithoutMedicineNameAddInput>
  }

  export type MedicinePurchessUpdateWithWhereUniqueWithoutMedicineNameAddInput = {
    where: MedicinePurchessWhereUniqueInput
    data: XOR<MedicinePurchessUpdateWithoutMedicineNameAddInput, MedicinePurchessUncheckedUpdateWithoutMedicineNameAddInput>
  }

  export type MedicinePurchessUpdateManyWithWhereWithoutMedicineNameAddInput = {
    where: MedicinePurchessScalarWhereInput
    data: XOR<MedicinePurchessUpdateManyMutationInput, MedicinePurchessUncheckedUpdateManyWithoutMedicineNameAddInput>
  }

  export type MedicineNameCategoryCreateWithoutMedicinePurchessInput = {
    id?: string
    genericName: string
    medicineNameAdd?: MedicineNameAddCreateNestedManyWithoutMedicineCategoryInput
    MedicineStock?: MedicineStockCreateNestedManyWithoutMedicineCategoryInput
  }

  export type MedicineNameCategoryUncheckedCreateWithoutMedicinePurchessInput = {
    id?: string
    genericName: string
    medicineNameAdd?: MedicineNameAddUncheckedCreateNestedManyWithoutMedicineCategoryInput
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutMedicineCategoryInput
  }

  export type MedicineNameCategoryCreateOrConnectWithoutMedicinePurchessInput = {
    where: MedicineNameCategoryWhereUniqueInput
    create: XOR<MedicineNameCategoryCreateWithoutMedicinePurchessInput, MedicineNameCategoryUncheckedCreateWithoutMedicinePurchessInput>
  }

  export type MedicineNameAddCreateWithoutMedicinePurchessInput = {
    id?: string
    name: string
    conpany: string
    medicineCategory: MedicineNameCategoryCreateNestedOneWithoutMedicineNameAddInput
    MedicineStock?: MedicineStockCreateNestedManyWithoutMedicineNameAddInput
  }

  export type MedicineNameAddUncheckedCreateWithoutMedicinePurchessInput = {
    id?: string
    name: string
    conpany: string
    genericName: string
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutMedicineNameAddInput
  }

  export type MedicineNameAddCreateOrConnectWithoutMedicinePurchessInput = {
    where: MedicineNameAddWhereUniqueInput
    create: XOR<MedicineNameAddCreateWithoutMedicinePurchessInput, MedicineNameAddUncheckedCreateWithoutMedicinePurchessInput>
  }

  export type BranchCreateWithoutMedicinePurchessInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerCreateNestedManyWithoutBranchInput
    employees?: EmployeeCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeCreateNestedManyWithoutBranchInput
    flocks?: FlockCreateNestedManyWithoutBranchInput
    Feed?: FeedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutMedicinePurchessInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerUncheckedCreateNestedManyWithoutBranchInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeUncheckedCreateNestedManyWithoutBranchInput
    flocks?: FlockUncheckedCreateNestedManyWithoutBranchInput
    Feed?: FeedUncheckedCreateNestedManyWithoutBranchInput
    MedicineStock?: MedicineStockUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutMedicinePurchessInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutMedicinePurchessInput, BranchUncheckedCreateWithoutMedicinePurchessInput>
  }

  export type MedicineNameCategoryUpsertWithoutMedicinePurchessInput = {
    update: XOR<MedicineNameCategoryUpdateWithoutMedicinePurchessInput, MedicineNameCategoryUncheckedUpdateWithoutMedicinePurchessInput>
    create: XOR<MedicineNameCategoryCreateWithoutMedicinePurchessInput, MedicineNameCategoryUncheckedCreateWithoutMedicinePurchessInput>
    where?: MedicineNameCategoryWhereInput
  }

  export type MedicineNameCategoryUpdateToOneWithWhereWithoutMedicinePurchessInput = {
    where?: MedicineNameCategoryWhereInput
    data: XOR<MedicineNameCategoryUpdateWithoutMedicinePurchessInput, MedicineNameCategoryUncheckedUpdateWithoutMedicinePurchessInput>
  }

  export type MedicineNameCategoryUpdateWithoutMedicinePurchessInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    medicineNameAdd?: MedicineNameAddUpdateManyWithoutMedicineCategoryNestedInput
    MedicineStock?: MedicineStockUpdateManyWithoutMedicineCategoryNestedInput
  }

  export type MedicineNameCategoryUncheckedUpdateWithoutMedicinePurchessInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    medicineNameAdd?: MedicineNameAddUncheckedUpdateManyWithoutMedicineCategoryNestedInput
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutMedicineCategoryNestedInput
  }

  export type MedicineNameAddUpsertWithoutMedicinePurchessInput = {
    update: XOR<MedicineNameAddUpdateWithoutMedicinePurchessInput, MedicineNameAddUncheckedUpdateWithoutMedicinePurchessInput>
    create: XOR<MedicineNameAddCreateWithoutMedicinePurchessInput, MedicineNameAddUncheckedCreateWithoutMedicinePurchessInput>
    where?: MedicineNameAddWhereInput
  }

  export type MedicineNameAddUpdateToOneWithWhereWithoutMedicinePurchessInput = {
    where?: MedicineNameAddWhereInput
    data: XOR<MedicineNameAddUpdateWithoutMedicinePurchessInput, MedicineNameAddUncheckedUpdateWithoutMedicinePurchessInput>
  }

  export type MedicineNameAddUpdateWithoutMedicinePurchessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    conpany?: StringFieldUpdateOperationsInput | string
    medicineCategory?: MedicineNameCategoryUpdateOneRequiredWithoutMedicineNameAddNestedInput
    MedicineStock?: MedicineStockUpdateManyWithoutMedicineNameAddNestedInput
  }

  export type MedicineNameAddUncheckedUpdateWithoutMedicinePurchessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    conpany?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutMedicineNameAddNestedInput
  }

  export type BranchUpsertWithoutMedicinePurchessInput = {
    update: XOR<BranchUpdateWithoutMedicinePurchessInput, BranchUncheckedUpdateWithoutMedicinePurchessInput>
    create: XOR<BranchCreateWithoutMedicinePurchessInput, BranchUncheckedCreateWithoutMedicinePurchessInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutMedicinePurchessInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutMedicinePurchessInput, BranchUncheckedUpdateWithoutMedicinePurchessInput>
  }

  export type BranchUpdateWithoutMedicinePurchessInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUpdateManyWithoutBranchNestedInput
    flocks?: FlockUpdateManyWithoutBranchNestedInput
    Feed?: FeedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutMedicinePurchessInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUncheckedUpdateManyWithoutBranchNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutBranchNestedInput
    Feed?: FeedUncheckedUpdateManyWithoutBranchNestedInput
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type MedicineNameAddCreateWithoutMedicineStockInput = {
    id?: string
    name: string
    conpany: string
    medicineCategory: MedicineNameCategoryCreateNestedOneWithoutMedicineNameAddInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutMedicineNameAddInput
  }

  export type MedicineNameAddUncheckedCreateWithoutMedicineStockInput = {
    id?: string
    name: string
    conpany: string
    genericName: string
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutMedicineNameAddInput
  }

  export type MedicineNameAddCreateOrConnectWithoutMedicineStockInput = {
    where: MedicineNameAddWhereUniqueInput
    create: XOR<MedicineNameAddCreateWithoutMedicineStockInput, MedicineNameAddUncheckedCreateWithoutMedicineStockInput>
  }

  export type MedicineNameCategoryCreateWithoutMedicineStockInput = {
    id?: string
    genericName: string
    medicineNameAdd?: MedicineNameAddCreateNestedManyWithoutMedicineCategoryInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutMedicineCategoryInput
  }

  export type MedicineNameCategoryUncheckedCreateWithoutMedicineStockInput = {
    id?: string
    genericName: string
    medicineNameAdd?: MedicineNameAddUncheckedCreateNestedManyWithoutMedicineCategoryInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutMedicineCategoryInput
  }

  export type MedicineNameCategoryCreateOrConnectWithoutMedicineStockInput = {
    where: MedicineNameCategoryWhereUniqueInput
    create: XOR<MedicineNameCategoryCreateWithoutMedicineStockInput, MedicineNameCategoryUncheckedCreateWithoutMedicineStockInput>
  }

  export type BranchCreateWithoutMedicineStockInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerCreateNestedManyWithoutBranchInput
    employees?: EmployeeCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeCreateNestedManyWithoutBranchInput
    flocks?: FlockCreateNestedManyWithoutBranchInput
    Feed?: FeedCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutMedicineStockInput = {
    id?: string
    locationName: string
    type: $Enums.BranchType
    branchCode: string
    customers?: CustomerUncheckedCreateNestedManyWithoutBranchInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutBranchInput
    branchEmployees?: BranchEmployeeUncheckedCreateNestedManyWithoutBranchInput
    flocks?: FlockUncheckedCreateNestedManyWithoutBranchInput
    Feed?: FeedUncheckedCreateNestedManyWithoutBranchInput
    MedicinePurchess?: MedicinePurchessUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutMedicineStockInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutMedicineStockInput, BranchUncheckedCreateWithoutMedicineStockInput>
  }

  export type MedicineNameAddUpsertWithoutMedicineStockInput = {
    update: XOR<MedicineNameAddUpdateWithoutMedicineStockInput, MedicineNameAddUncheckedUpdateWithoutMedicineStockInput>
    create: XOR<MedicineNameAddCreateWithoutMedicineStockInput, MedicineNameAddUncheckedCreateWithoutMedicineStockInput>
    where?: MedicineNameAddWhereInput
  }

  export type MedicineNameAddUpdateToOneWithWhereWithoutMedicineStockInput = {
    where?: MedicineNameAddWhereInput
    data: XOR<MedicineNameAddUpdateWithoutMedicineStockInput, MedicineNameAddUncheckedUpdateWithoutMedicineStockInput>
  }

  export type MedicineNameAddUpdateWithoutMedicineStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    conpany?: StringFieldUpdateOperationsInput | string
    medicineCategory?: MedicineNameCategoryUpdateOneRequiredWithoutMedicineNameAddNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutMedicineNameAddNestedInput
  }

  export type MedicineNameAddUncheckedUpdateWithoutMedicineStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    conpany?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutMedicineNameAddNestedInput
  }

  export type MedicineNameCategoryUpsertWithoutMedicineStockInput = {
    update: XOR<MedicineNameCategoryUpdateWithoutMedicineStockInput, MedicineNameCategoryUncheckedUpdateWithoutMedicineStockInput>
    create: XOR<MedicineNameCategoryCreateWithoutMedicineStockInput, MedicineNameCategoryUncheckedCreateWithoutMedicineStockInput>
    where?: MedicineNameCategoryWhereInput
  }

  export type MedicineNameCategoryUpdateToOneWithWhereWithoutMedicineStockInput = {
    where?: MedicineNameCategoryWhereInput
    data: XOR<MedicineNameCategoryUpdateWithoutMedicineStockInput, MedicineNameCategoryUncheckedUpdateWithoutMedicineStockInput>
  }

  export type MedicineNameCategoryUpdateWithoutMedicineStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    medicineNameAdd?: MedicineNameAddUpdateManyWithoutMedicineCategoryNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutMedicineCategoryNestedInput
  }

  export type MedicineNameCategoryUncheckedUpdateWithoutMedicineStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    medicineNameAdd?: MedicineNameAddUncheckedUpdateManyWithoutMedicineCategoryNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutMedicineCategoryNestedInput
  }

  export type BranchUpsertWithoutMedicineStockInput = {
    update: XOR<BranchUpdateWithoutMedicineStockInput, BranchUncheckedUpdateWithoutMedicineStockInput>
    create: XOR<BranchCreateWithoutMedicineStockInput, BranchUncheckedCreateWithoutMedicineStockInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutMedicineStockInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutMedicineStockInput, BranchUncheckedUpdateWithoutMedicineStockInput>
  }

  export type BranchUpdateWithoutMedicineStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUpdateManyWithoutBranchNestedInput
    flocks?: FlockUpdateManyWithoutBranchNestedInput
    Feed?: FeedUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutMedicineStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    type?: EnumBranchTypeFieldUpdateOperationsInput | $Enums.BranchType
    branchCode?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateManyWithoutBranchNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutBranchNestedInput
    branchEmployees?: BranchEmployeeUncheckedUpdateManyWithoutBranchNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutBranchNestedInput
    Feed?: FeedUncheckedUpdateManyWithoutBranchNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type CustomerCreateManyBranchInput = {
    id?: string
    farmCode: string
    name: string
    farmType: $Enums.Custtype
    totalShed: number
    totalSquare: number
    capacity: number
    nid: string
  }

  export type EmployeeCreateManyBranchInput = {
    id?: string
    employeeId: string
    name: string
    workingLocation: string
    designation: string
  }

  export type BranchEmployeeCreateManyBranchInput = {
    id?: string
    employeeId: string
  }

  export type FlockCreateManyBranchInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    executiveId: string
    farmCode: string
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
  }

  export type FeedCreateManyBranchInput = {
    id?: string
    feedName: string
    stock: number
  }

  export type MedicineStockCreateManyBranchInput = {
    id?: string
    genericName: string
    medicineName: string
    totalStock: number
    price: number
  }

  export type MedicinePurchessCreateManyBranchInput = {
    id?: string
    genericName: string
    name: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
  }

  export type CustomerUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    farmType?: EnumCusttypeFieldUpdateOperationsInput | $Enums.Custtype
    totalShed?: IntFieldUpdateOperationsInput | number
    totalSquare?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nid?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutCustomerNestedInput
    flocks?: FlockUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    farmType?: EnumCusttypeFieldUpdateOperationsInput | $Enums.Custtype
    totalShed?: IntFieldUpdateOperationsInput | number
    totalSquare?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nid?: StringFieldUpdateOperationsInput | string
    address?: AddressUncheckedUpdateOneWithoutCustomerNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    farmType?: EnumCusttypeFieldUpdateOperationsInput | $Enums.Custtype
    totalShed?: IntFieldUpdateOperationsInput | number
    totalSquare?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    nid?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    branchEmployees?: BranchEmployeeUpdateManyWithoutEmployeeNestedInput
    address?: AddressUpdateOneWithoutEmployeeNestedInput
    flocks?: FlockUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    branchEmployees?: BranchEmployeeUncheckedUpdateManyWithoutEmployeeNestedInput
    address?: AddressUncheckedUpdateOneWithoutEmployeeNestedInput
    flocks?: FlockUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    workingLocation?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
  }

  export type BranchEmployeeUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutBranchEmployeesNestedInput
  }

  export type BranchEmployeeUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type BranchEmployeeUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type FlockUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutFlocksNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutFlocksNestedInput
  }

  export type FlockUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executiveId?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
  }

  export type FlockUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executiveId?: StringFieldUpdateOperationsInput | string
    farmCode?: StringFieldUpdateOperationsInput | string
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
  }

  export type FeedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    feedNameCategory?: FeedNameCategoryUpdateOneRequiredWithoutFeedsNestedInput
  }

  export type FeedUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type FeedUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    feedName?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineStockUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    medicineNameAdd?: MedicineNameAddUpdateOneRequiredWithoutMedicineStockNestedInput
    medicineCategory?: MedicineNameCategoryUpdateOneRequiredWithoutMedicineStockNestedInput
  }

  export type MedicineStockUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineStockUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type MedicinePurchessUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
    medicineCategory?: MedicineNameCategoryUpdateOneRequiredWithoutMedicinePurchessNestedInput
    medicineNameAdd?: MedicineNameAddUpdateOneRequiredWithoutMedicinePurchessNestedInput
  }

  export type MedicinePurchessUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
  }

  export type MedicinePurchessUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
  }

  export type FlockCreateManyCustomerInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    executiveId: string
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    branchCode: string
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
  }

  export type FlockUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
    employee?: EmployeeUpdateOneRequiredWithoutFlocksNestedInput
    branch?: BranchUpdateOneRequiredWithoutFlocksNestedInput
  }

  export type FlockUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executiveId?: StringFieldUpdateOperationsInput | string
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    branchCode?: StringFieldUpdateOperationsInput | string
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
  }

  export type FlockUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executiveId?: StringFieldUpdateOperationsInput | string
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    branchCode?: StringFieldUpdateOperationsInput | string
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
  }

  export type BranchEmployeeCreateManyEmployeeInput = {
    id?: string
    branchCode: string
  }

  export type FlockCreateManyEmployeeInput = {
    id?: string
    flockNumber: number
    flockStatus?: $Enums.FlockStatus
    startDate: Date | string
    endDate?: Date | string | null
    farmCode: string
    docName: string
    docQuantity?: number
    approvedBy?: string | null
    branchCode: string
    totalFeedKg?: number
    totalMedicine?: number
    fcr?: number
    totalSellBirds?: number
    mortality?: number
  }

  export type BranchEmployeeUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneRequiredWithoutBranchEmployeesNestedInput
  }

  export type BranchEmployeeUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
  }

  export type BranchEmployeeUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
  }

  export type FlockUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutFlocksNestedInput
    branch?: BranchUpdateOneRequiredWithoutFlocksNestedInput
  }

  export type FlockUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    farmCode?: StringFieldUpdateOperationsInput | string
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    branchCode?: StringFieldUpdateOperationsInput | string
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
  }

  export type FlockUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    flockNumber?: IntFieldUpdateOperationsInput | number
    flockStatus?: EnumFlockStatusFieldUpdateOperationsInput | $Enums.FlockStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    farmCode?: StringFieldUpdateOperationsInput | string
    docName?: StringFieldUpdateOperationsInput | string
    docQuantity?: IntFieldUpdateOperationsInput | number
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    branchCode?: StringFieldUpdateOperationsInput | string
    totalFeedKg?: IntFieldUpdateOperationsInput | number
    totalMedicine?: IntFieldUpdateOperationsInput | number
    fcr?: FloatFieldUpdateOperationsInput | number
    totalSellBirds?: IntFieldUpdateOperationsInput | number
    mortality?: IntFieldUpdateOperationsInput | number
  }

  export type FeedCreateManyFeedNameCategoryInput = {
    id?: string
    stock: number
    branchCode?: string | null
  }

  export type FeedUpdateWithoutFeedNameCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    branch?: BranchUpdateOneWithoutFeedNestedInput
  }

  export type FeedUncheckedUpdateWithoutFeedNameCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    branchCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedUncheckedUpdateManyWithoutFeedNameCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    branchCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicineNameAddCreateManyMedicineCategoryInput = {
    id?: string
    name: string
    conpany: string
  }

  export type MedicineStockCreateManyMedicineCategoryInput = {
    id?: string
    medicineName: string
    branchCode: string
    totalStock: number
    price: number
  }

  export type MedicinePurchessCreateManyMedicineCategoryInput = {
    id?: string
    name: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
    branchCode: string
  }

  export type MedicineNameAddUpdateWithoutMedicineCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    conpany?: StringFieldUpdateOperationsInput | string
    MedicineStock?: MedicineStockUpdateManyWithoutMedicineNameAddNestedInput
    MedicinePurchess?: MedicinePurchessUpdateManyWithoutMedicineNameAddNestedInput
  }

  export type MedicineNameAddUncheckedUpdateWithoutMedicineCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    conpany?: StringFieldUpdateOperationsInput | string
    MedicineStock?: MedicineStockUncheckedUpdateManyWithoutMedicineNameAddNestedInput
    MedicinePurchess?: MedicinePurchessUncheckedUpdateManyWithoutMedicineNameAddNestedInput
  }

  export type MedicineNameAddUncheckedUpdateManyWithoutMedicineCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    conpany?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineStockUpdateWithoutMedicineCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    medicineNameAdd?: MedicineNameAddUpdateOneRequiredWithoutMedicineStockNestedInput
    branch?: BranchUpdateOneRequiredWithoutMedicineStockNestedInput
  }

  export type MedicineStockUncheckedUpdateWithoutMedicineCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineStockUncheckedUpdateManyWithoutMedicineCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type MedicinePurchessUpdateWithoutMedicineCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
    medicineNameAdd?: MedicineNameAddUpdateOneRequiredWithoutMedicinePurchessNestedInput
    branch?: BranchUpdateOneRequiredWithoutMedicinePurchessNestedInput
  }

  export type MedicinePurchessUncheckedUpdateWithoutMedicineCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
  }

  export type MedicinePurchessUncheckedUpdateManyWithoutMedicineCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineStockCreateManyMedicineNameAddInput = {
    id?: string
    genericName: string
    branchCode: string
    totalStock: number
    price: number
  }

  export type MedicinePurchessCreateManyMedicineNameAddInput = {
    id?: string
    genericName: string
    purchaseUnitPrice: number
    sellUnitPrice: number
    purchaseQuantity: number
    mfgDate: string
    expDate: string
    bonusQuantity?: number | null
    purchaseTotalPrice: number
    supplierInfo: string
    branchCode: string
  }

  export type MedicineStockUpdateWithoutMedicineNameAddInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    medicineCategory?: MedicineNameCategoryUpdateOneRequiredWithoutMedicineStockNestedInput
    branch?: BranchUpdateOneRequiredWithoutMedicineStockNestedInput
  }

  export type MedicineStockUncheckedUpdateWithoutMedicineNameAddInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineStockUncheckedUpdateManyWithoutMedicineNameAddInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type MedicinePurchessUpdateWithoutMedicineNameAddInput = {
    id?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
    medicineCategory?: MedicineNameCategoryUpdateOneRequiredWithoutMedicinePurchessNestedInput
    branch?: BranchUpdateOneRequiredWithoutMedicinePurchessNestedInput
  }

  export type MedicinePurchessUncheckedUpdateWithoutMedicineNameAddInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
  }

  export type MedicinePurchessUncheckedUpdateManyWithoutMedicineNameAddInput = {
    id?: StringFieldUpdateOperationsInput | string
    genericName?: StringFieldUpdateOperationsInput | string
    purchaseUnitPrice?: IntFieldUpdateOperationsInput | number
    sellUnitPrice?: IntFieldUpdateOperationsInput | number
    purchaseQuantity?: IntFieldUpdateOperationsInput | number
    mfgDate?: StringFieldUpdateOperationsInput | string
    expDate?: StringFieldUpdateOperationsInput | string
    bonusQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseTotalPrice?: IntFieldUpdateOperationsInput | number
    supplierInfo?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}