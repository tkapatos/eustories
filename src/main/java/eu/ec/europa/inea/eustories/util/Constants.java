package eu.ec.europa.inea.eustories.util;

public class Constants {
    /**
     * Inea spring profiles
     */
    public class SpringProfiles {

        private SpringProfiles() {
            super();
        }

        /**
         * Local environment with embedded mongdb database
         */
        public static final String DEV = "dev";

        /**
         * Production environment
         */
        public static final String PROD = "prod";

    }
}
