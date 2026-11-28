export const createNote = (req, res) => {
  const { title, content } = req.body;

  // Basic validation
  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: "Title and content are required",
    });
  }

  res.status(201).json({
    success: true,
    message: "Note created successfully",
    data: {
      title,
      content,
    },
  });
};