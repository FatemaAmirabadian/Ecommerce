import { useRouter } from 'next/navigation';
import React from 'react'

function CancelButton() {
  const router = useRouter();
    
  const cancelHandler = () => {
    router.push("/");
  };

  return (
    <div>
      <button
          className="productform_button cancel_button"
          onClick={cancelHandler}
        >
          Cancel
        </button>
    </div>
  )
}

export default CancelButton
