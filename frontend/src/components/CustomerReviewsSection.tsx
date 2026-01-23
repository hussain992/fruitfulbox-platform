interface Review {
  user: string;
  comment: string;
}

interface CustomerReviewsSectionProps {
  reviews: Review[];
}

const CustomerReviewsSection: React.FC<CustomerReviewsSectionProps> = ({
  reviews,
}) => {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 border-t pt-8">
      <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
      <div className="space-y-4">
        {reviews.map((review, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold text-gray-800">{review.user}</p>
            <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviewsSection;
