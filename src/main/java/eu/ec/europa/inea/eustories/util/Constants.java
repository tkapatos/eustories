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
         * Local environment with mongdb database started in a local docker container
         */
        public static final String LOCAL_DOCKER = "localdocker";

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
