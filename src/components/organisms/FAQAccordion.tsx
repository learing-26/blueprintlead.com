"use client";

import { useState } from "react";
import { Icon } from "@/components/atoms/Icon";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React from "react";

export interface FAQItem {
  /**
   * Question text
   */
  question: string;
  /**
   * Answer text
   */
  answer: string;
}

export interface FAQAccordionProps {
  /**
   * Array of FAQ items
   */
  items: FAQItem[];
  /**
   * Allow multiple items open at once
   */
  allowMultiple?: boolean;
  /**
   * Initially open item index
   */
  defaultOpenIndex?: number;
}

/**
 * FAQAccordion organism for displaying interactive FAQ items
 * Features expandable/collapsible answers with smooth animations
 */
export function FAQAccordion({
  items,
  allowMultiple = false,
  defaultOpenIndex,
}: FAQAccordionProps): React.ReactElement {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  const isOpen = (index: number) => openIndexes.includes(index);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden"
        >
          {/* Question Button */}
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors duration-200"
            aria-expanded={isOpen(index)}
          >
            <span className="font-semibold text-slate-900 text-lg">
              {item.question}
            </span>
            <div
              className="flex-shrink-0 transition-transform duration-200"
              style={{ transform: isOpen(index) ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <Icon
                icon={ChevronDown}
                size="sm"
                className="text-slate-600"
              />
            </div>
          </button>

          {/* Answer Panel */}
          <AnimatePresence initial={false}>
            {isOpen(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-slate-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
