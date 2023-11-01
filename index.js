const AWS = require('aws-sdk');

// Configure the AWS SDK with your credentials and preferred region
AWS.config.update({
  accessKeyId: 'your-access-key-id',
  secretAccessKey: 'your-secret-access-key',
  region: 'us-east-1' // Replace with your preferred region
});

// Create an S3 object for interacting with Amazon S3
const s3 = new AWS.S3();

// Example: List all buckets in your AWS account
s3.listBuckets((err, data) => {
  if (err) {
    console.error('Error listing buckets:', err);
  } else {
    console.log('S3 Buckets:');
    data.Buckets.forEach((bucket) => {
      console.log(bucket.Name);
    });
  }
});

// Example: Upload a file to Amazon S3
const params = {
  Bucket: 'your-bucket-name',
  Key: 'example.txt',
  Body: 'Hello, AWS S3!'
};

s3.upload(params, (err, data) => {
  if (err) {
    console.error('Error uploading file:', err);
  } else {
    console.log('File uploaded successfully:', data.Location);
  }
});
