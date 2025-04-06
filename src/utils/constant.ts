export enum Success_Message {
  LINE_CREATED_SUCCESSFULLY = 'Line is created successfully',
  USER_CREATED_SUCCESSFULLY = 'User is created successfully',
  USER_LOGGED_IN = 'User is logged in successfully',
  LINEMEN_CREATED_SUCCESSFULLY = 'Line men created successfully',
  LINEMEN_LOGGED_IN_SUCCESSFULLY = 'Line men logged in successfully',
}

export enum STATUS_CODE {
  SUCCESS_CODE = 200,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  DATABASE_ERROR = 502,
  BAD_REQUEST = 401,
}

export enum SUCCESS_FAILED {
  SUCCESS = 1,
  FAILED = 0,
}

export enum ERROR_MESSAGE {
  LINEMEN_CREATED_ERROR = 'Line men is not created error occurs',
  LINEMEN_LOGGED_IN = 'Line men logged in error',
  USER_LOGGED_ERROR = 'User is not logged in  error occurs',
  LINE_CREATION_ERROR = 'Error occurs when the line is created',
}
