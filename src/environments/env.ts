
export interface AppEnvironment {
  /**
   * Logger configuration
   */
  logging: {
    /**
     * Write logs of this level and above to the console
     */
    level: LogLevel
  }
}

export enum LogLevel {
  DEBUG = 0,
  INFO ,
  ERROR
}
