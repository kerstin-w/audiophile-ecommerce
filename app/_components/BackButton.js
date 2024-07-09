'use client';

function BackButton() {
  const goBack = () => {
    window.history.back();
  };
  return (
    <button
      className="font-medium text-lg leading-tight text-black opacity-50 mt-16 mb-10"
      onClick={goBack}
    >
      Go Back
    </button>
  );
}

export default BackButton;
