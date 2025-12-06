import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const words = [
    { word: 'カフェ', meaning: 'cafe', example: 'カフェでコーヒーを飲みます。' },
    { word: '猫', meaning: 'cat', example: '猫が庭で遊んでいます。' },
    { word: '本', meaning: 'book', example: '図書館で本を借りました。' },
    { word: '車', meaning: 'car', example: '新しい車を買いました。' },
    { word: '学校', meaning: 'school', example: '毎日学校に行きます。' },
    { word: '友達', meaning: 'friend', example: '週末に友達と映画を見に行きます。' },
    { word: '食べる', meaning: 'to eat', example: '朝ごはんを食べました。' },
    { word: '飲む', meaning: 'to drink', example: '水を飲んでください。' },
    { word: '行く', meaning: 'to go', example: '明日東京に行きます。' },
    { word: '見る', meaning: 'to see/watch', example: 'テレビを見ています。' },
  ];

  for (const word of words) {
    await prisma.word.upsert({
      where: { word: word.word },
      update: {},
      create: word,
    });
  }

  console.log('Seed data inserted');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
