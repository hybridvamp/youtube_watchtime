"use client"
import { Fragment, useState } from 'react'

function User() {
    const [video, setVideo] = useState({});
    const [play, setPlay] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let cutUrl = video.url.includes('=') ? video.url.split('=')?.[1] : video.url;
        setPlay({url: cutUrl, count: video.count})

    }
    const handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setVideo({...video, [name]: value})
    }
  return (
    <div className='flex flex-col w-full bg-black/[0.25]'>
    <div className='h-[60px] w-full mb-10'>
        <form onSubmit={(e) => handleSubmit(e)} className='flex h-full gap-5 p-2'>
          <div className='flex flex-1 h-full gap-5'>
          <input className='w-full h-full pl-2 border rounded ' name="url" type="text" onChange={handleChange} placeholder='Put Youtube Url'/>
          <input className='w-full h-full pl-2 border rounded appearance-none' name="count" type='number' onChange={handleChange} placeholder='Put Value How Many you want'/>
          </div>
          <div className='bg-green-500 w-[120px] h-full rounded flex items-center justify-center'>
            <button type="submit" className='text-white'>Submit</button>
          </div>
        </form>
    </div>
        <div className='flex flex-wrap items-center justify-center gap-5'>
          {Array.from({ length: play.count },(_,i) => (
              <Fragment key={i}>
              <iframe className='rounded-[24px] border' width="560" height="315" src={`http://www.youtube.com/embed/${play.url}?Version=3&mute=1&enablejsapi=1&autoplay=1&loop=1&playlist=${play.url}`} frameborder="0" allowfullscreen></iframe>
              </Fragment>
          ))}
        </div>
    </div>
  )
}

export default User
