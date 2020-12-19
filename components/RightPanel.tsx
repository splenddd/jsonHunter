import React from 'react'

const RightPanel = ({ result, url }) => {
    return (
        <>
            <figure className='hidden md:block p-2 rounded text-white border-2 border-solid border-brew-primary overflow-scroll'>
                <pre>{result}</pre>
            </figure>
            <div className='hidden md:flex justify-end space-x-2'>
                <button
                    onClick={() => {
                        if (!result) {
                            alert('没有访问数据')
                            return
                        }
                        const element = document.createElement('a')
                        const file = new Blob([result], {
                            type: 'text/json'
                        })
                        element.href = URL.createObjectURL(file)
                        window.open(element.href, '_blank')
                    }}
                >
                    预览
                </button>
                <button
                    onClick={() => {
                        if (!result) {
                            alert('没有访问数据')
                            return
                        }
                        const element = document.createElement('a')
                        const file = new Blob([result], {
                            type: 'text/json'
                        })
                        element.href = URL.createObjectURL(file)
                        element.download = url + '.json'
                        document.body.append(element)
                        element.click()
                    }}
                >
                    下载
                </button>
            </div>
        </>
    )
}

export default RightPanel