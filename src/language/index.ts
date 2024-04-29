import { storage } from '@/utils/storage';

export const globalLanguage = ref(storage.get('lang') ?? 'zh-CN');
