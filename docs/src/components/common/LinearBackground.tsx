const LinearBackground = () => {
  return (
    <div className='absolute inset-x-0 -top-40 -z-50 h-[calc(100%-60px)] w-full tablet_max:-top-32'>
      <svg
        className='mx-auto w-full -scale-y-90 opacity-60 contrast-150 tablet_max:h-full tablet_max:-scale-y-150'
        viewBox='0 0 1440 800'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_1739_2)'>
          <g filter='url(#filter0_f_1739_2)'>
            <ellipse cx='987.203' cy='967.25' rx='581' ry='356.5' transform='rotate(8.47676 987.203 967.25)' fill='#a21caf' />
          </g>
          <g filter='url(#filter1_f_1739_2)'>
            <ellipse cx='991.907' cy='1000.77' rx='454.5' ry='280.5' transform='rotate(11.69 991.907 1000.77)' fill='#fb7185' />
          </g>
          <g filter='url(#filter2_f_1739_2)'>
            <ellipse cx='405' cy='1050' rx='448' ry='332' fill='#0ea5e9' />
          </g>
          <g filter='url(#filter3_f_1739_2)'>
            <ellipse cx='779' cy='985.5' rx='259' ry='204.5' fill='#fcd34d' />
          </g>
        </g>
        <defs>
          <filter id='filter0_f_1739_2' x='110.117' y='304.308' width='1754.18' height='1325.88' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_1739_2' />
          </filter>
          <filter id='filter1_f_1739_2' x='343.172' y='510.984' width='1297.47' height='979.573' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='100' result='effect1_foregroundBlur_1739_2' />
          </filter>
          <filter id='filter2_f_1739_2' x='-343' y='418' width='1496' height='1264' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_1739_2' />
          </filter>
          <filter id='filter3_f_1739_2' x='320' y='581' width='918' height='809' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='100' result='effect1_foregroundBlur_1739_2' />
          </filter>
          <clipPath id='clip0_1739_2'>
            <rect width='1440' height='900' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default LinearBackground
