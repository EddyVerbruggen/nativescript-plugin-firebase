declare module "nativescript-plugin-firebase" {

    /**
     * The allowed values for LoginOptions.type.
     */
    enum LoginType {
      /**
       * No further data is required.
       */
      ANONYMOUS,
      /**
       * This requires you to pass in email and password properties as well.
       */
      PASSWORD
    }

    /**
     * The allowed values for QueryOptions.orderBy.type.
     */
    enum QueryOrderByType {
      KEY,
      VALUE,
      CHILD,
      PRIORITY
    }

    /**
     * The allowed values for QueryOptions.range.type.
     */
    enum QueryRangeType {
      START_AT,
      END_AT,
      EQUAL_TO
    }

    /**
     * The allowed values for QueryOptions.limit.type.
     */
    enum QueryLimitType {
      FIRST,
      LAST
    }

    /**
     * Logout of the Firebase instance you previously logged in to.
     */
    function logout(): void;
}