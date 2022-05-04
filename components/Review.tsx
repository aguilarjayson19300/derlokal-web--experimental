const Star = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0_5866_3937)'>
            <path d='M18.3196 23.0039C18.0977 23.0039 17.875 22.9507 17.6761 22.8508L12.0001 20.0403L6.32865 22.849C6.12973 22.9489 5.91431 23.0002 5.69065 23.0002C5.14523 23.0002 4.6539 22.6977 4.40915 22.211C4.25148 21.8975 4.21481 21.5382 4.30465 21.1999L6.00048 15.039L1.42356 10.5061C1.15315 10.2375 1.00281 9.88091 1.00098 9.49957C1.00006 9.11916 1.14673 8.76074 1.4144 8.48941C1.65273 8.24832 1.97081 8.10074 2.30906 8.07232L7.82556 7.52599L10.7186 1.79041C10.8955 1.44482 11.1934 1.19091 11.5591 1.07357C11.7031 1.02682 11.8525 1.00391 12.0019 1.00391C12.2274 1.00391 12.4538 1.05891 12.6564 1.16249C12.9268 1.30091 13.1431 1.51724 13.2806 1.78766C13.2816 1.79041 16.1791 7.53057 16.1791 7.53057L21.7066 8.07874C22.4812 8.14291 23.0633 8.83316 22.9982 9.61599C22.9698 9.95424 22.8222 10.2714 22.5811 10.5107L18.0079 15.0427L19.7028 21.1981C19.9063 21.9662 19.4507 22.7546 18.6871 22.9572C18.568 22.9874 18.4442 23.0039 18.3196 23.0039Z' fill='#F4AD42' />
        </g>
        <defs>
            <clipPath id='clip0_5866_3937'>
                <rect width='22' height='22' fill='white' transform='translate(1 1)' />
            </clipPath>
        </defs>
    </svg>
)

const Play = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="23" fill="#0B0B09" fill-opacity="0.3" stroke="white" stroke-width="2" />
        <path d="M31.3585 22.5257L20.7158 14.8948C19.5806 14.0807 18.0002 14.8921 18.0002 16.2892V31.5513C18.0002 32.9484 19.5806 33.7598 20.7158 32.9457L31.3582 25.3144C32.3132 24.6301 32.3132 23.2104 31.3585 22.5257Z" fill="white" />
    </svg>
)
const Review = ({ rating = 5, isHighlight = false }) => (
    <div className={`${!isHighlight ? 'flex flex-col gap-4' : 'columns-2'}`}>
        <div className={` ${!isHighlight ? 'aspect-w-3 aspect-h-4' : ''}`}>
            {!isHighlight && <div className="absolute z-10">
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <Play />
                </div>
            </div>}
            <img src='https://picsum.photos/536/354' alt='me' className='object-cover rounded-lg w-full' />
        </div>
        <div className={`flex flex-col ${!isHighlight ? 'p-0' : 'lg:p-8 p-0 pl-8'}`}>
            <div className='flex gap-1 h-[24px]'>
                {Array.from(Array(rating).keys()).map(() => <Star size={isHighlight ? 22 : 11} />)}
            </div>

            {isHighlight && <p className='text-lg sm:my-6 my-4'>
                “Der Lokal is basically allowing me to manage my business efficiently and take care of my kids too.”
            </p>}

            <h5 className='text-lg font-bold'>Secret Kitchen</h5>
            <p className='text-2xs text-secondary2'>Marvin Agustin</p>

            {isHighlight && <div className='mt-6 md:block hidden'>
                <button className='rounded-full bg-primary text-white py-3 px-8 text-2xs'>Watch the video</button>
            </div>}
        </div>
    </div>
)

export default Review;