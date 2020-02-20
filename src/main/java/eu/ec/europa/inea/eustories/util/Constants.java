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

    /**
     * Status of a story
     */
    public enum Status{
        TO_D0,
        IN_PROGRESS,
        RESOLVED,
        IN_REVIEW,
        COMPLETED
    }
}
