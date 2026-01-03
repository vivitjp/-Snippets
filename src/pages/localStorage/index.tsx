import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Input,
  Text,
  HStack,
  Heading,
  Badge,
  VStack,
} from '@chakra-ui/react';

const LocalStoragePage: React.FC = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [getKey, setGetKey] = useState('');
  const [retrievedValue, setRetrievedValue] = useState('');
  const [removeKey, setRemoveKey] = useState('');
  const [index, setIndex] = useState('');
  const [keyAtIndex, setKeyAtIndex] = useState('');
  const [length, setLength] = useState(0);
  const [allItems, setAllItems] = useState<Record<string, any>>({});
  const [multipleKeys, setMultipleKeys] = useState('');
  const [multipleValues, setMultipleValues] = useState('');
  const [removeKeys, setRemoveKeys] = useState('');

  useEffect(() => {
    updateAllItems();
    updateLength();
  }, []);

  const updateAllItems = () => {
    const items: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = localStorage.getItem(key);
        items[key] = value ? JSON.parse(value) : value;
      }
    }
    setAllItems(items);
  };

  const updateLength = () => {
    setLength(localStorage.length);
  };

  const handleSetItem = () => {
    if (key && value) {
      localStorage.setItem(key, JSON.stringify(value));
      updateAllItems();
      updateLength();
      setKey('');
      setValue('');
    }
  };

  const handleGetItem = () => {
    if (getKey) {
      const item = localStorage.getItem(getKey);
      setRetrievedValue(item ? JSON.parse(item) : 'Not found');
      setGetKey('');
    }
  };

  const handleRemoveItem = () => {
    if (removeKey) {
      localStorage.removeItem(removeKey);
      updateAllItems();
      updateLength();
      setRemoveKey('');
    }
  };

  const handleClear = () => {
    localStorage.clear();
    updateAllItems();
    updateLength();
  };

  const handleGetKey = () => {
    if (index) {
      const key = localStorage.key(parseInt(index));
      setKeyAtIndex(key || 'Not found');
      setIndex('');
    }
  };

  const handleSetMultipleItems = () => {
    if (multipleKeys && multipleValues) {
      const keys = multipleKeys.split(',').map(k => k.trim());
      const values = multipleValues.split(',').map(v => v.trim());
      keys.forEach((k, i) => {
        if (k && values[i]) {
          localStorage.setItem(k, JSON.stringify(values[i]));
        }
      });
      updateAllItems();
      updateLength();
      setMultipleKeys('');
      setMultipleValues('');
    }
  };

  const handleRemoveMultipleItems = () => {
    if (removeKeys) {
      const keys = removeKeys.split(',').map(k => k.trim());
      keys.forEach(k => {
        if (k) {
          localStorage.removeItem(k);
        }
      });
      updateAllItems();
      updateLength();
      setRemoveKeys('');
    }
  };

  const style = {
    backgroundColor: '#3182CE',
    padding: '10px',
    borderRadius: '8px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  }


  return (
    <Box p={8} maxW="800px" mx="auto">
      <Heading mb={6}>localStorage 全機能テストページ</Heading>

      <VStack gap={6} align="stretch">
        {/* setItem */}
        <Box>
          <Heading size="md" mb={3}>1. setItem - キーと値を設定</Heading>
          <HStack>
            <Input placeholder="キー" value={key} onChange={(e) => setKey(e.target.value)} />
            <Input placeholder="値" value={value} onChange={(e) => setValue(e.target.value)} />
            <Button style={style} onClick={handleSetItem}>設定</Button>
          </HStack>
        </Box>

        <Box as="hr" border="none" height="1px" bg="gray.200" my={4} />

        {/* getItem */}
        <Box>
          <Heading size="md" mb={3}>2. getItem - キーの値を取得</Heading>
          <HStack>
            <Input placeholder="キー" value={getKey} onChange={(e) => setGetKey(e.target.value)} />
            <Button style={style} onClick={handleGetItem}>取得</Button>
          </HStack>
          <Text mt={2}>取得した値: {retrievedValue}</Text>
        </Box>

        <Box as="hr" border="none" height="1px" bg="gray.200" my={4} />

        {/* removeItem */}
        <Box>
          <Heading size="md" mb={3}>3. removeItem - キーを削除</Heading>
          <HStack>
            <Input placeholder="キー" value={removeKey} onChange={(e) => setRemoveKey(e.target.value)} />
            <Button style={style} onClick={handleRemoveItem}>削除</Button>
          </HStack>
        </Box>

        <Box as="hr" border="none" height="1px" bg="gray.200" my={4} />

        {/* clear */}
        <Box>
          <Heading size="md" mb={3}>4. clear - すべてのデータを削除</Heading>
          <Button style={style} onClick={handleClear}>すべてクリア</Button>
        </Box>

        <Box as="hr" border="none" height="1px" bg="gray.200" my={4} />

        {/* key */}
        <Box>
          <Heading size="md" mb={3}>5. key - 指定インデックスのキーを取得</Heading>
          <HStack>
            <Input placeholder="インデックス" value={index} onChange={(e) => setIndex(e.target.value)} />
            <Button style={style} onClick={handleGetKey}>取得</Button>
          </HStack>
          <Text mt={2}>キー: {keyAtIndex}</Text>
        </Box>

        <Box as="hr" border="none" height="1px" bg="gray.200" my={4} />

        {/* length */}
        <Box>
          <Heading size="md" mb={3}>6. length - 保存されているキーの数</Heading>
          <Text>現在のキー数: <Badge style={style} >{length}</Badge></Text>
        </Box>

        <Box as="hr" border="none" height="1px" bg="gray.200" my={4} />

        {/* すべてのアイテムを表示 */}
        <Box>
          <Heading size="md" mb={3}>7. すべてのキーと値を表示</Heading>
          <VStack gap={3}>
            {Object.entries(allItems).map(([k, v]) => (
              <Box key={k}>
                <strong>{k}:</strong> {JSON.stringify(v)}
              </Box>
            ))}
          </VStack>
        </Box>

        <Box as="hr" border="none" height="1px" bg="gray.200" my={4} />

        {/* 複数のキーを設定 */}
        <Box>
          <Heading size="md" mb={3}>8. 複数のキーを設定 (カンマ区切り)</Heading>
          <VStack gap={2}>
            <Input placeholder="キー (例: key1,key2,key3)" value={multipleKeys} onChange={(e) => setMultipleKeys(e.target.value)} />
            <Input placeholder="値 (例: value1,value2,value3)" value={multipleValues} onChange={(e) => setMultipleValues(e.target.value)} />
            <Button style={style} onClick={handleSetMultipleItems}>複数設定</Button>
          </VStack>
        </Box>

        <Box as="hr" border="none" height="1px" bg="gray.200" my={4} />

        {/* 複数のキーを削除 */}
        <Box>
          <Heading size="md" mb={3}>9. 複数のキーを削除 (カンマ区切り)</Heading>
          <HStack>
            <Input placeholder="キー (例: key1,key2)" value={removeKeys} onChange={(e) => setRemoveKeys(e.target.value)} />
            <Button style={style} onClick={handleRemoveMultipleItems}>複数削除</Button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default LocalStoragePage;