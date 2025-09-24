
import React, { useEffect } from 'react';

interface AlipayProcessorProps {
  formHtml: string;
  onError?: (error: Error) => void;
}

const AlipayProcessor: React.FC<AlipayProcessorProps> = ({ 
  formHtml, 
  onError 
}) => {
  useEffect(() => {
    try {
      const container = document.createElement('div');
      container.style.display = 'none';
      container.innerHTML = formHtml;
      document.body.appendChild(container);
      
      const form = document.forms[0];
      if (!form) throw new Error('支付宝表单未正确渲染');
      console.log(form);
      form.submit();
      
      return () => container.remove();
    } catch (error) {
      onError?.(error as Error);
    } 
  }, [formHtml, onError]);

  return null;
};

export default AlipayProcessor;
