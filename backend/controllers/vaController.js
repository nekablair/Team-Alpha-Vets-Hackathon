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
  const { zipCode } = req.body;

  const zipMatch = await VA.find({ zip: { $regex: zipCode } });

  if (!!zipMatch) {
    res.status(200).json(zipMatch);
  } else {
    res.status(404);
    throw new Error('No zip match');
  }
});

// @description Fetch all va's using pagination
//  @route      GET /api/va/all?limit/offset
//  @access     Public
const getAllVA = asyncHandler(async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    const offset = parseInt(req.query.skip);
    console.log('req.query.limit', req.query);

    const allVA = await VA.find().skip(offset).limit(limit);
    const allVACount = await VA.count();
    // Pagination
    const totalPages = Math.ceil(allVACount / limit);
    const currentPage = Math.ceil(allVACount % offset);

    res.status(200).send({
      data: allVA,
      paging: {
        total: allVACount,
        page: currentPage,
        pages: totalPages,
      },
    });
  } catch (err) {
    console.log('Error', err);
    res.status(500).send({
      data: null,
    });
  }
});

export { getAllVA, getVAByZip, getVAByState };
