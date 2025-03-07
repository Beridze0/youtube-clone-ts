import example from '@/assets/example.jpg'


const RecommendedVideos = () => {
  return (
    <div className='flex gap-2 cursor-pointer'>
        <div className='w-[230px] h-[125px] shrink-0'>
            <img src={example} alt="" className='w-full h-full object-cover rounded-lg' />
        </div>
        <div className='mt-1'>
            <h1 className='text-[0.9rem]'>How to Build a YouTube Clone with React & TypeScript</h1>
            <p className='text-[0.8rem] text-muted-foreground'>CodeWithMe</p>
            <p className='text-xs text-muted-foreground'>2.3M views</p>
        </div>
    </div>
  )
}

export default RecommendedVideos