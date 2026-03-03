import React from 'react'

const Map = () => {
  return (
    <div>
      <div class="relative w-full h-[400px] border-5 border-yellow-300 rounded-2xl">
  <div class="w-full h-full overflow-hidden bg-transparent border rounded-xl">
    <iframe
      class="w-full h-full"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://maps.google.com/maps?hl=en&q=AIT%20Pune&t=p&z=14&ie=UTF8&iwloc=B&output=embed"
    ></iframe>
  </div>
</div>
    </div>
  )
}

export default Map
