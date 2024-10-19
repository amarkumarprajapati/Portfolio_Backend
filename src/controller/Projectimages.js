let Projectimages = {};

Projectimages.getimages = (req, res) => {
  const images = [
    {
      key: "AI.png",
      url: "https://portfolioamarkumar.s3.ap-south-1.amazonaws.com/Project_images/AI.png",
      redirectUrl: "https://ai-summery.netlify.app/",
    },
    {
      key: "Grosary.png",
      url: "https://portfolioamarkumar.s3.ap-south-1.amazonaws.com/Project_images/Grosary.png",
      redirectUrl: " https://grosaryfrontend.netlify.app/",
    },
    {
      key: "Music.png",
      url: "https://portfolioamarkumar.s3.ap-south-1.amazonaws.com/Project_images/Music.png",
      redirectUrl: "https://musicwebappplay.netlify.app/",
    },
    {
      key: "TShirts.png",
      url: "https://portfolioamarkumar.s3.ap-south-1.amazonaws.com/Project_images/TShirts.png",
      redirectUrl: "https://tshirts123.netlify.app/",
    },
  ];

  res.json({ success: true, images });
};

module.exports = Projectimages;
