"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Send, Twitter, FlipVertical, Clipboard, Check } from "lucide-react"
import { useEffect, useState } from "react"
import confetti from 'canvas-confetti'

const flipMap: { [key: string]: string } = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ə', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
  'i': 'ı', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
  'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
  'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ',
  'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': '⋊', 'L': '˥', 'M': 'W', 'N': 'N',
  'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ',
  'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z', '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ',
  '4': 'ᔭ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', ',': "'", '.': '˙',
  '?': '¿', '!': '¡', '"': '„', "'": ',', '`': ',', '(': ')', ')': '(', '[': ']',
  ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾',
  ' ': ' ', ':': ':', ';': ';', '-': '-', '+': '+', '=': '=', '/': '/', '\\': '\\',
  '$': '$', '#': '#', '@': '@', '%': '%', '^': 'ʌ', '*': '*', '|': '|'
}

const flipText = (text: string) => {
  return text
    .split('')
    .map(char => flipMap[char] || char)
    .reverse()
    .join('')
}

export default function Component() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [flippedInputValue, setFlippedInputValue] = useState("")
  const [isCopiedCA, setIsCopiedCA] = useState(false)
  const [isCopiedInput, setIsCopiedInput] = useState(false)
  const [isRotated, setIsRotated] = useState(false)
  const contractAddress = "0xa*******************************"

  useEffect(() => {
    // Rotate the page after 3 seconds
    const rotationTimer = setTimeout(() => {
      setIsRotated(false)
    }, 4000)

    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 100)
    }, 150)

    return () => {
      clearTimeout(rotationTimer)
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    setFlippedInputValue(flipText(inputValue))
  }, [inputValue])

  const handleCopyCA = () => {
    navigator.clipboard.writeText(contractAddress)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    setIsCopiedCA(true)
    setTimeout(() => setIsCopiedCA(false), 2000)
  }

  const handleCopyInput = () => {
    navigator.clipboard.writeText(flippedInputValue)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    setIsCopiedInput(true)
    setTimeout(() => setIsCopiedInput(false), 2000)
  }

  const handleFlop = () => {
    setInputValue(flipText(inputValue))
  }

  return (
    <div 
      className={`h-screen bg-sky-100 flex flex-col overflow-hidden transition-transform duration-500 ease-in-out ${isRotated ? 'rotate-180' : ''}`}
    >
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-4 flex flex-col justify-between">
        {/* Title */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-black text-center mb-2">
            $FLOPCAT
          </h1>
          <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
            CA: {contractAddress}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopyCA}
              className="h-6 w-6"
            >
              {isCopiedCA ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
            </Button>
          </p>

          {/* Content Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
            {/* Left Text */}
            <div className="space-y-2">
              <p className="text-sm md:text-base font-bold uppercase leading-tight">
                $FLOPCAT IS AN EDIBLE DIGITAL ASSET IN THE CRYPTOCURRENCY JUNGLE BUILT ON BASE
              </p>
            </div>

            {/* Center Image */}
            <div className="relative">
              <div className="w-32 h-32 md:w-48 md:h-48 mx-auto relative animate-bounce-slow">
                <img src="flop.jpg" alt="Flop Cat" className="w-full h-full object-cover rounded-full" style={{ transform: 'rotate(180deg)' }} />
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Send className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 text-sm">
                BUY $FLOP
              </Button>
            </div>
          </div>
        </div>

        {/* Input and Buttons */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center gap-2">
          <Input
            type="text"
            placeholder={flipText("Enter text here")}
            value={flippedInputValue}
            onChange={(e) => setInputValue(flipText(e.target.value))}
            className="w-full text-right bg-white border-2 border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500"
            style={{ transform: 'rotate(180deg)' }}
          />
          <div className="flex gap-2">
            <Button
              onClick={handleFlop}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-1 text-sm flex items-center gap-1"
            >
              <FlipVertical className="w-4 h-4" />
              Flop
            </Button>
            <Button
              onClick={handleCopyInput}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-1 text-sm flex items-center gap-1"
            >
              {isCopiedInput ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Clipboard className="w-4 h-4" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>
      </main>

      {/* Scrolling Text Footer */}
      <div className="bg-white py-2 overflow-hidden">
        <div 
          className="whitespace-nowrap animate-scroll flex"
          style={{
            transform: `translateX(-${scrollPosition}%)`,
          }}
        >
          {Array(20).fill("BUY $FLOPCAT").map((text, i) => (
            <span key={i} className="mx-4 text-lg font-bold" style={{ display: 'inline-block', transform: 'rotate(180deg)' }}>
              {flipText(text)}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
