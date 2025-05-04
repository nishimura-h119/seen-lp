'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/app/components/ui/card'
import { Button } from '@/app/components/ui/button'
import { Textarea } from '@/app/components/ui/textarea'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactionList } from '@/app/components/ReactionList'

export default function DemoSection() {
  const [input, setInput] = useState('')

  const [posts, setPosts] = useState<
    { content: string; reaction: string; id: number }[]
    >([])

const handleSubmit = () => {
    if (!input.trim()) return
    const reactionList = ReactionList();
  
    const random = reactionList[Math.floor(Math.random() * reactionList.length)]
  
    const newPost = {
      id: Date.now(), // 一意のID
      content: input,
      reaction: random,
    }
  
    setPosts([newPost, ...posts]) // 先頭に追加
    setInput('')
  }
  

  return (
    <section className="w-full py-20 px-4 bg-muted/50 text-center" id='demo'>
      <h2 className="text-2xl font-semibold mb-4">感情を投稿してみる</h2>

      <Card className="mb-6">
        <CardContent className="p-4 space-y-4">
          <Textarea
            placeholder="今感じていることを書いてみてください"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={handleSubmit} className="w-full">
            投稿
          </Button>
        </CardContent>
      </Card>

      <AnimatePresence>
  {posts.map((post) => (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3 }}
      className="space-y-3 mb-6"
    >
      <Card>
        <CardContent className="p-4">
          <p className="text-muted-foreground text-sm mb-2">あなたの投稿</p>
          <p className="text-base">{post.content}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <p className="text-muted-foreground text-sm mb-2">返ってきた反応</p>
          <p className="text-base italic">“{post.reaction}”</p>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</AnimatePresence>

    </section>
  )
}
