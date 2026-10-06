export function useCvDocument() {
  const available = useState('cv-document-available', () => false)
  const checked = useState('cv-document-checked', () => false)
  const path = '/cv/Mohab-Mohamed-CV.pdf'
  onMounted(async () => {
    if (checked.value) return
    checked.value = true
    try { const response = await fetch(path, { method: 'HEAD' }); available.value = response.ok && (response.headers.get('content-type') || '').includes('pdf') } catch { available.value = false }
  })
  return { available, path }
}
