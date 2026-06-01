
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/Nav'

// больших надежд стоить не нужно, я так, заранее :) но большую часть я написала руками хотя бы
//　　　　　／ ＞　  フ
//　　　　　| 　_　 _|
//　 　　　／`ミ _x 彡
//　　 　 /　　　 　 |
//　　　 /　 ヽ　　 ﾉ
//　／￣|　　 |　|　|
//　| (￣ヽ＿_ヽ_)_)
//　＼二つ

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
