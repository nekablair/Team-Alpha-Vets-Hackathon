import asyncHandler from 'express-async-handler';
import VA from '../models/vaModel.js';

// @description Fetch all VA's in db by state
//  @route      Post /api/va/state
//  @access     Public
const getVAByState = asyncHandler(async (req, res) => {
  const { state } = req.body;

  const stateMatch = await VA.find({ state });

  if (!!stateMatch) {
    res.status(200).json(stateMatch);
  } else {
    res.status(404);
    throw new Error('No state match');
  }
});

// @description Fetch all va in db by ZIP
//  @route      Post /api/va/zip
//  @access     Public
const getVAByZip = asyncHandler(async (req, res) => {
  const { zip } = req.body;

  const zipMatch = await VA.find({ zip });

  if (!!zipMatch) {
    res.status(200).json(zipMatch);
  } else {
    res.status(404)
    throw new Error('No zip match');
  }
});

// @description Fetch all va's
//  @route      GET /api/va/all
//  @access     Public
const getAllVA = asyncHandler(async (req, res) => {
  const allVA = await VA.find({});
  if (allVA) {
    res.status(200).json(allVA);
  }
  res.status(404)
  throw new Error("No VA's found");
});
export { getAllVA, getVAByZip, getVAByState };
