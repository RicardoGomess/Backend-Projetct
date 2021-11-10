import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middlewares/async.js';
import userSchema from '../models/user.model.js';



// Login user
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;


  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  // Check for user
  const user = await userSchema.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }


  sendTokenResponse(user, 200, res);
});

// Get token from model, create cookie and send response
const sendTokenResponse = (userSchema, statusCode, res) => {
  // Create token
  const token = userSchema.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token
    });
};

//Get current logged in user
export const getMe = asyncHandler(async (req, res, next) => {
  const user = await userSchema.findById(req.userSchema.id);

  res.status(200).json({
    success: true,
    data: user
  });
});

//Log user out / clear cookie
export const logout = asyncHandler(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    data: {}
  });
});
